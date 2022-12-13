/**
 * NOT IN USE! JUST HERE FOR REFERENCE
 */

import { ActorClass, InitialActor } from "./actor";

// Types needed to construct a new PlayerClass
export interface InitialPlayer extends InitialActor {}

/**
 * This is the Player Class, it inherits all the methods
 * of the ActorClass, and only logic specific to the Player
 * should be included here.
 */
export class PlayerClass extends ActorClass {
  constructor(player: InitialPlayer) {
    super(player);
  }
}
