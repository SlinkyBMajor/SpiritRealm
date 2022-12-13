import React, { useCallback, useMemo, useState } from "react";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}
// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)
export interface ActorProperties {
  _maxHP: number;
  _currentHP: number;
  _team: Team;
}

export interface Actor extends ActorProperties {
  isDead: () => boolean;
  takeDamage: (value: number) => void;
}

export function useActor(actorProperties: ActorProperties): Actor {
  const [properties, setProperties] =
    useState<ActorProperties>(actorProperties);

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

  return { ...properties, takeDamage, isDead };
}
