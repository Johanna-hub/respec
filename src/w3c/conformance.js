// Module w3c/conformance
// Handle the conformance section properly.
import confoTmpl from "w3c/templates/conformance";
import { pub } from "core/pubsubhub";

export const name = "w3c/conformance";

export function run(conf) {
  const confo = document.getElementById("conformance");
  if (confo) {
    const confoText = document.createDocumentFragment();
    for (const n of confoTmpl(conf).childNodes) {
      confoText.appendChild(n);
    }
    confo.prepend(confoText);
  }
  // Added message for legacy compat with Aria specs
  // See https://github.com/w3c/respec/issues/793
  pub("end", "w3c/conformance");
}
