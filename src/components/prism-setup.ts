import { Prism } from "prism-react-renderer";

if (typeof window !== "undefined") {
  (window as any).Prism = Prism;
} else if (typeof global !== "undefined") {
  (global as any).Prism = Prism;
}
