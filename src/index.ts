/**
 * @module Optipost
 * @version 2.0.0
 * @author methamphetqmine
 * 
 * @description A wrapper for Express.js that allows you to create endpoints that can only be accessed by Roblox's WinInet user-agent.
 */

import express, { Application, Request, Response } from "express";

export class Optipost {
    app: Application;

    constructor() {
        this.app = express();
    }

    private callbackWrapper(callback: Function | undefined) {
        return (request: Request, response: Response) => {
            if (request.headers["user-agent"] === "Roblox/WinInet") {
                callback?.(request, response);
            } else {
                response.status(403).send("Access to this endpoint is forbidden.");
            }
        };
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

        return method(url, this.callbackWrapper(callback));
    }

    async listen(port: number, callback?: () => void) {
        return this.app.listen(port, callback);
    }
}