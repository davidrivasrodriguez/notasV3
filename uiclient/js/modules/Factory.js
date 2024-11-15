import { Panel } from '../classes/Panel.js';
import { Component } from '../classes/Component.js';

export class Factory {
    constructor() {
        this.items = [];
    }

    static create(type, ...args) {
        let item;
        switch (type) {
            case 'panel':
                item = new Panel(...args);
                break;
            case 'component':
                item = new Component(...args);
                break;
            default:
                throw new Error('Invalid type');
        }
        this.items.push(item);
        return item;
    }

    getItems() {
        return this.items;
    }
}