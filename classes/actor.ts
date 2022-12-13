/**
 * NOT IN USE! JUST HERE FOR REFERENCE
 * ACTOR WAS MOVED INTO HOOKS/ACTOR.ts
 */

import EventEmitter from "events";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}

export interface InitialActor {
  maxHP: number;
  currentHP: number;
  team: Team;
}

const event = new EventEmitter();

export class ActorClass {
  _maxHP: number;
  _currentHP: number;
  _isDead: boolean;
  _team: Team;
  eventEmitter: EventEmitter;

  constructor(actor: InitialActor) {
    this._maxHP = actor.maxHP;
    this._currentHP = actor.currentHP || actor.maxHP;
    this._team = actor.team;
    this._isDead = false; // Might remove
    this.eventEmitter = event;
  }

  // Deal damage to actor
  takeDamage(damage: number) {
    console.log("PLAYER TOOK DAMAGE", damage);
    this._currentHP = this._currentHP - damage;
    if (this.isDead()) {
      this.kill();
    }
    event.emit("ACTOR_TOOK_DAMAGE", this);
  }

  // Check if Actor is dead
  isDead(): boolean {
    return this._currentHP < 1;
  }

  // Kill the Actor
  kill() {
    this._currentHP = 0;
    this._isDead = true;
  }
}
