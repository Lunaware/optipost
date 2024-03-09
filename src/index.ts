/**
 * @module Optipost
 * @version 2.0.2
 * @author methamphetqmine, nbitzz
 * 
 * @description A basic wrapper for the express library that only accepts incoming requests that have the Roblox/WinInet User-Agent and the Roblox-Place-Id header.
 */

import express, { Application, Request, Response, NextFunction } from "express";

export class Optipost {
    app: Application;
    debug: boolean;
    Authorization: string | undefined;

    constructor() {
        this.app = express();
        this.debug = false;

        this.app.use(express.json())

        this.app.use((request: Request, response: Response, next: NextFunction) => {
            if (request.headers["user-agent"] === "Roblox/WinInet" && request.headers["Roblox-Place-Id"]) {
                if (request.headers["Authorization"] === (this.Authorization || undefined)) {
                    next()
                } else {
                    response.status(401).send({ error: "Invalid Authorization." });
                }
            } else {
                response.status(403).send({ error: "Forbidden." });
            }

            if (this.debug === true) {
                console.log("[Optipost]:", request.method, "|", response.statusCode, response.statusMessage, "|", request.path);
            }
        })
    }

    async createEndpoint(
        method: string | any,
        url: string,
        callback?: (request: Request, response: Response) => void
    ) {
        method = this.app[method.toLowerCase() as keyof Application]?.bind(this.app) || method;

        if (typeof method === "string") {
            console.error(`"${method}" is not a valid method.`);
            return;
        }

        return method(url, callback);
    }

    async listen(port: number, callback?: () => void) {
        return this.app.listen(port, callback);
    }
}