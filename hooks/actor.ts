import { useCallback, useEffect, useState } from "react";
import { Effect } from "../types/effect";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}

// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)
export interface ActorProperties {
  _maxHP: number;
  _currentHP: number;
  _mana: ManaPools;
  _team: Team;
  _effects: Effect[]; // Effects currently active on actor
}

export interface ManaPools {
  white: ManaProperty;
  lightning: ManaProperty;
  chaos: ManaProperty;
}

export type ManaProperty = {
  max: number;
  current: number;
};

export type ManaType = "white" | "lightning" | "chaos";

export interface Actor extends ActorProperties {
  isDead: () => boolean;
  takeDamage: (value: number) => void;
  heal: (value: number) => void;
  spendMana: (value: number, type: ManaType) => void;
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

  const spendMana = (value: number, type: ManaType) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }

    console.log("Actor spent mana", ":", value, type);

    const newManaObject = {
      ...properties._mana[type],
      current: properties._mana[type].current - value,
    };

    setProperties((prev) => ({
      ...prev,
      _mana: {
        ...prev._mana,
        [type]: newManaObject,
      },
    }));
  };

  return { ...properties, takeDamage, spendMana, isDead, heal };
}
