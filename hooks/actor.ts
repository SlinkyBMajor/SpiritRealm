import { useCallback, useEffect, useState } from "react";
import { ActorClass } from "../classes/actor";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}
// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)

export interface ActorProperties {
  _maxHP: number;
  _currentHP: number;
  _mana: Mana;
  _team: Team;
}

interface Mana {
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
  spendMana: (value: number, type: string) => void;
}

export function useActor(actorProperties: ActorProperties): Actor {
  const [properties, setProperties] =
    useState<ActorProperties>(actorProperties);

  useEffect(() => {
    if (properties._currentHP < 1) {
      window.alert("You dead");
    }
  }, [properties._currentHP]);

  const isDead = useCallback(() => {
    return properties._currentHP < 1;
  }, [properties._currentHP]);

  const takeDamage = (value: number) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }
    console.log("Actor took damage", value);
    setProperties((prev) => ({ ...prev, _currentHP: prev._currentHP - value }));
  };

  const spendMana = (value: number, type: string) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }

    console.log("Actor spent mana", ":", value, type);

    if (type === "white") {
      const change = setProperties((prev) => ({
        ...prev,
        _mana: {
          white: {
            ...prev._mana.white,
            current: prev._mana.white.current - value,
          },
          lightning: {
            ...prev._mana.lightning,
          },
          chaos: {
            ...prev._mana.chaos,
          },
        },
      }));

      return change;
    }
    if (type === "lightning") {
      const change = setProperties((prev) => ({
        ...prev,
        _mana: {
          white: {
            ...prev._mana.white,
          },
          lightning: {
            ...prev._mana.lightning,
            current: prev._mana.lightning.current - value,
          },
          chaos: {
            ...prev._mana.chaos,
          },
        },
      }));

      return change;
    }

    if (type === "chaos") {
      const change = setProperties((prev) => ({
        ...prev,
        _mana: {
          white: {
            ...prev._mana.white,
          },
          lightning: {
            ...prev._mana.lightning,
          },
          chaos: {
            ...prev._mana.chaos,
            current: prev._mana.chaos.current - value,
          },
        },
      }));

      return change;
    }
  };

  return { ...properties, takeDamage, spendMana, isDead };
}
