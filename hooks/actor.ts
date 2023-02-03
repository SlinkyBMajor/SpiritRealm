import { useCallback, useEffect, useState } from "react";
import { Effect } from "../types/effect";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}
// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)

type ManaProperty = { max: number; current: number };
export interface ActorProperties {
  _maxHP: number;
  _currentHP: number;
  _mana: {
    white: ManaProperty;
  };
  _team: Team;
  _effects: Effect[]; // Effects currently active on actor
}

export interface Actor extends ActorProperties {
  isDead: () => boolean;
  takeDamage: (value: number) => void;
  heal: (value: number) => void;
  spendMana: (value: number) => void;
}

export function useActor(actorProperties: ActorProperties): Actor {
  const [properties, setProperties] =
    useState<ActorProperties>(actorProperties);

  useEffect(() => {
    if (properties._currentHP < 1) {
      window.alert("You dead");
    }
  }, [properties._currentHP]);

  // Check if the actor is dead
  const isDead = useCallback(() => {
    return properties._currentHP < 1;
  }, [properties._currentHP]);

  // Adds an effect to this actors effect array
  const addEffect = (effect: Effect) => {
    // TODO: Stacking effects?
    setProperties((prev) => ({
      ...prev,
      _effects: [...prev._effects, effect],
    }));
  };

  const takeDamage = (value: number) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }
    setProperties((prev) => ({ ...prev, _currentHP: prev._currentHP - value }));
  };

  const heal = (value: number) => {
    if (typeof value !== "number") {
      throw new Error("heal got non number value");
    }
    // If heal value would make the actor have more HP than max, set it to max
    setProperties((prev) => {
      return {
        ...prev,
        _currentHP:
          prev._currentHP + value <= prev._maxHP
            ? prev._currentHP + value
            : prev._maxHP,
      };
    });
  };

  const spendMana = (value: number) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }
    console.log("Actor spent mana", value);
    setProperties((prev) => ({
      ...prev,
      _mana: {
        white: {
          ...prev._mana.white,
          current: prev._mana.white.current - value,
        },
      },
    }));
  };

  return { ...properties, takeDamage, spendMana, isDead, heal };
}
