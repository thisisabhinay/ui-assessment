import { Button } from "./button";
import { HeaderBase } from "./header-base";
import { InputText } from "./input-text";

export function HeaderContacts() {
  return (
    <HeaderBase title="Contacts">
      <div className="flex items-center gap-3 lg:gap-20">
        <InputText placeholder="Search contacts" size="lg" />
        <div className="flex items-center gap-3">
          <Button>New</Button>
          <Button variant="secondary">Import...</Button>
        </div>
      </div>
    </HeaderBase>
  );
}
