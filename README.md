# Calculator App

![Calculator Preview](https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=1200&h=300&fit=crop&auto=format)

A modern, responsive calculator application built with Next.js 16 and TypeScript. Features a clean interface with basic arithmetic operations, decimal support, and keyboard input functionality.

## ✨ Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Number Support**: Handle decimal calculations with precision
- **Keyboard Input**: Full keyboard support for enhanced usability
- **Clear Functions**: AC (All Clear) and backspace for easy correction
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Graceful handling of division by zero and invalid operations
- **Modern UI**: Clean, intuitive interface with smooth animations
- **TypeScript**: Full type safety for reliable code

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69117f76fb7423bbdde4fd3f&clone_repository=691181a0fb7423bbdde4fd54)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built as a standalone calculator application

### Code Generation Prompt

> Build a calculator app with basic arithmetic operations and a clean interface

The app has been tailored with modern React patterns and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library with hooks for state management
- **Bun**: Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 Usage

### Mouse/Touch Input
- Click number buttons (0-9) to input numbers
- Click operation buttons (+, -, ×, ÷) to perform calculations
- Click "=" to get the result
- Click "AC" to clear all
- Click "⌫" to delete last digit
- Click "." for decimal numbers

### Keyboard Input
- Number keys (0-9): Input numbers
- +, -, *, /: Arithmetic operations
- Enter or =: Calculate result
- Escape or c: Clear all
- Backspace: Delete last digit
- .: Decimal point

## 📁 Project Structure

```
calculator-app/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Calculator page
│   └── globals.css         # Global styles
├── components/
│   ├── Calculator.tsx      # Main calculator component
│   └── CosmicBadge.tsx     # Built with Cosmic badge
├── public/
│   └── dashboard-console-capture.js  # Console logging for dashboard
├── types.ts                # TypeScript type definitions
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── .gitignore             # Git ignore rules
```

## 🎨 Customization

### Styling
The calculator uses Tailwind CSS for styling. You can customize the appearance by modifying:
- Button colors in `components/Calculator.tsx`
- Layout and spacing with Tailwind utility classes
- Color scheme in `tailwind.config.js`

### Functionality
Extend the calculator by:
- Adding more operations (square root, percentage, etc.)
- Implementing calculation history
- Adding memory functions (M+, M-, MR, MC)
- Integrating with Cosmic CMS to store calculation history

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Build the application:
```bash
bun run build
```

2. Deploy the `out` directory to Netlify

### Environment Variables

No environment variables are required for the basic calculator functionality.

## 🔗 Integration with Cosmic

While this calculator works standalone, you can integrate it with Cosmic CMS to:
- Store calculation history per user
- Save user preferences (theme, decimal places)
- Track usage analytics
- Implement user accounts

To integrate with Cosmic, add environment variables:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📝 License

MIT License - feel free to use this calculator in your projects!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

<!-- README_END -->