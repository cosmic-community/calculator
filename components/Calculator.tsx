'use client'

import { useState, useEffect } from 'react'
import type { CalculatorState, CalculatorButton } from '@/types'

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  })

  // Handle button clicks
  const handleButtonClick = (button: CalculatorButton) => {
    if (button >= '0' && button <= '9') {
      handleNumber(button)
    } else if (button === '.') {
      handleDecimal()
    } else if (['+', '-', '×', '÷'].includes(button)) {
      handleOperation(button)
    } else if (button === '=') {
      handleEquals()
    } else if (button === 'AC') {
      handleClear()
    } else if (button === '⌫') {
      handleBackspace()
    }
  }

  // Handle number input
  const handleNumber = (num: string) => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: num,
        waitingForOperand: false,
      })
    } else {
      setState({
        ...state,
        display: state.display === '0' ? num : state.display + num,
      })
    }
  }

  // Handle decimal point
  const handleDecimal = () => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: '0.',
        waitingForOperand: false,
      })
    } else if (state.display.indexOf('.') === -1) {
      setState({
        ...state,
        display: state.display + '.',
      })
    }
  }

  // Handle operation buttons
  const handleOperation = (nextOperation: string) => {
    const inputValue = parseFloat(state.display)

    if (state.previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true,
      })
    } else if (state.operation) {
      const currentValue = state.previousValue || 0
      const newValue = performCalculation(currentValue, inputValue, state.operation)

      setState({
        display: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForOperand: true,
      })
    }
  }

  // Handle equals button
  const handleEquals = () => {
    const inputValue = parseFloat(state.display)

    if (state.previousValue !== null && state.operation) {
      const currentValue = state.previousValue
      const newValue = performCalculation(currentValue, inputValue, state.operation)

      setState({
        display: String(newValue),
        previousValue: null,
        operation: null,
        waitingForOperand: true,
      })
    }
  }

  // Handle clear button
  const handleClear = () => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    })
  }

  // Handle backspace button
  const handleBackspace = () => {
    if (state.display.length > 1) {
      setState({
        ...state,
        display: state.display.slice(0, -1),
      })
    } else {
      setState({
        ...state,
        display: '0',
      })
    }
  }

  // Perform calculation
  const performCalculation = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        if (secondValue === 0) {
          return 0 // Handle division by zero
        }
        return firstValue / secondValue
      default:
        return secondValue
    }
  }

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault()
      
      if (e.key >= '0' && e.key <= '9') {
        handleNumber(e.key)
      } else if (e.key === '.') {
        handleDecimal()
      } else if (e.key === '+') {
        handleOperation('+')
      } else if (e.key === '-') {
        handleOperation('-')
      } else if (e.key === '*') {
        handleOperation('×')
      } else if (e.key === '/') {
        handleOperation('÷')
      } else if (e.key === 'Enter' || e.key === '=') {
        handleEquals()
      } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        handleClear()
      } else if (e.key === 'Backspace') {
        handleBackspace()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [state])

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
      {/* Display */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6 shadow-inner">
        <div className="text-right">
          <div className="text-gray-500 text-sm mb-1 h-6">
            {state.previousValue !== null && state.operation
              ? `${state.previousValue} ${state.operation}`
              : ''}
          </div>
          <div className="text-white text-4xl font-bold break-all">
            {state.display}
          </div>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <button
          onClick={() => handleButtonClick('AC')}
          className="clear-button col-span-2"
        >
          AC
        </button>
        <button
          onClick={() => handleButtonClick('⌫')}
          className="backspace-button"
        >
          ⌫
        </button>
        <button
          onClick={() => handleButtonClick('÷')}
          className="operation-button"
        >
          ÷
        </button>

        {/* Row 2 */}
        <button
          onClick={() => handleButtonClick('7')}
          className="number-button"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="number-button"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="number-button"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('×')}
          className="operation-button"
        >
          ×
        </button>

        {/* Row 3 */}
        <button
          onClick={() => handleButtonClick('4')}
          className="number-button"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="number-button"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="number-button"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="operation-button"
        >
          -
        </button>

        {/* Row 4 */}
        <button
          onClick={() => handleButtonClick('1')}
          className="number-button"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="number-button"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="number-button"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="operation-button"
        >
          +
        </button>

        {/* Row 5 */}
        <button
          onClick={() => handleButtonClick('0')}
          className="number-button col-span-2"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick('.')}
          className="number-button"
        >
          .
        </button>
        <button
          onClick={() => handleButtonClick('=')}
          className="equals-button"
        >
          =
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="mt-6 text-center text-xs text-gray-500">
        💡 Tip: You can use your keyboard for faster input
      </div>
    </div>
  )
}