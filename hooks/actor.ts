import { useCallback, useEffect, useState } from "react";

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
}

export interface Actor extends ActorProperties {
  isDead: () => boolean;
  takeDamage: (value: number) => void;
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

  return { ...properties, takeDamage, spendMana, isDead };
}
