import { defineRule } from "vee-validate";
import { required, min, max, email, numeric } from '@vee-validate/rules';

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('email', email);
defineRule('numeric', numeric);