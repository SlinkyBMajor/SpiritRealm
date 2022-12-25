import React from "react";
import {
  faBoltLightning,
  faFire,
  faSpa,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element, ElementTypes } from "../../types/effect";

const elementToIcon: Record<Element, JSX.Element> = {
  [ElementTypes.none]: <FontAwesomeIcon icon={faCircle} />,
  [ElementTypes.chaos]: <FontAwesomeIcon icon={faSpa} />,
  [ElementTypes.fire]: <FontAwesomeIcon icon={faFire} />,
  [ElementTypes.lightning]: <FontAwesomeIcon icon={faBoltLightning} />,
};

export default function ElementTag({ element }: { element: Element }) {
  return elementToIcon[element] || null;
}
