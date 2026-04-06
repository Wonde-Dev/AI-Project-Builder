import { icons } from "lucide-react";
import { use } from "react";


export const codeExample = {
    "App.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from "@codefow/ai";

    function App() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div className="app">
            <CodeEditor 
            onChange={setCode}
            onAI={handleAICompletion}
            />
        </div>
    );
}
`,
"Hero.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from "@codefow/ai";

    function Hero() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div className="app">
            <CodeEditor 
            onChange={setCode}
            onAI={handleAICompletion}
            />
        </div>
    );
}
`,
"Navbar.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from "@codefow/ai";

    function Navbar() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div className="app">
            <CodeEditor 
            onChange={setCode}
            onAI={handleAICompletion}
            />
        </div>
    );
}
`
};

export const floatCards = {
    "App.jsx": {
        bgColor: "bg-purple-500/30",
        iconColor: "text-purple-400",
        textColor: "text-purple-300",
        contentColor: "text-purple-100",
        icon: "AI",
        title: "AI Code Generation",
        content: "Generate code snippets, functions, or even entire components using AI. Simply describe what you need, and let the AI do the work."
    },
    "Hero.jsx": {
        bgColor: "bg-green-500/30",
        iconColor: "text-green-400",
        textColor: "text-green-300",
        contentColor: "text-green-100",
        icon: "AI",
        title: "Context-Aware Suggestions",
        content: "Receive intelligent code suggestions based on the context of your current work. The AI understands your code and provides relevant recommendations to enhance your productivity."
    },
    "Navbar.jsx": {
        bgColor: "bg-blue-500/30",
        iconColor: "text-blue-400",
        textColor: "text-blue-300",
        contentColor: "text-blue-100",
        icon: "AI",
        title: "Seamless Integration",
        content: "Integrate AI capabilities directly into your development environment. Access powerful AI tools without leaving your code editor, making it easier than ever to leverage AI in your projects."
    }

}