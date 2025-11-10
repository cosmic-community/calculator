export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForOperand: boolean;
}

export type CalculatorOperation = '+' | '-' | '×' | '÷' | '=';

export type CalculatorButton = 
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  | '.' | '+' | '-' | '×' | '÷' | '=' | 'AC' | '⌫';