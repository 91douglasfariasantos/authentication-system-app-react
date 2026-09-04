import { Structure } from "./button.styles";
export function Button({ title, loading = false, ...rest }) {
  return (
    <Structure type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Structure>
  );
}