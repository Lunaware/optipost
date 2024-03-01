/**
 * @module Optipost
 * @version 2.0.2
 * @author methamphetqmine, nbitzz
 * 
 * @description A wrapper for Express.js that allows you to create endpoints that can only be accessed by Roblox's WinInet user-agent.
 */

import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs"

export class Optipost {
    app: Application;
    debug: boolean;
    authorization: string | undefined;

    constructor() {
        this.app = express();
        this.debug = false;

        this.app.use(express.json())

        this.app.use((request: Request, response: Response, next: NextFunction) => {
            if (request.headers["user-agent"] === "Roblox/WinInet" && request.headers["Roblox-Place-Id"]) {
                if (request.body["Authorization"] === (this.authorization || undefined)) {
                    next()
                } else {
                    response.status(401).send({ error: "Unauthorized." });
                }
            } else {
                response.status(403).send({ error: "Access to this endpoint is forbidden." });
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

const API = new Optipost()
API.debug = true

API.createEndpoint("GET", "/", (request, response) => {
    response.send("Hello, world!");
})

API.listen(80)