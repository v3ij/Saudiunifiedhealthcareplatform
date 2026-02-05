import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Send, Bot, User } from 'lucide-react';

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello! I\'m your AI Health Assistant. I can help you with questions about your health, medications, appointments, and more. How can I assist you today?',
      time: '10:00 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    'What are my upcoming appointments?',
    'When should I take my medications?',
    'Explain my latest lab results',
    'Find nearby pharmacies',
    'What is my blood pressure trend?'
  ];

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: 'I understand your question. Based on your medical records, here\'s what I found...',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>
          <div>
            <h2 className="text-lg">AI Health Assistant</h2>
            <p className="text-emerald-100 text-sm">Powered by advanced medical AI</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="p-4 space-y-2">
          <p className="text-slate-600 text-sm mb-2">Quick questions:</p>
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="w-full p-3 text-left text-sm bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.sender === 'ai' 
                ? 'bg-emerald-100' 
                : 'bg-blue-100'
            }`}>
              {message.sender === 'ai' ? (
                <Bot className="w-5 h-5 text-emerald-600" />
              ) : (
                <User className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className={`flex-1 ${message.sender === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block max-w-[85%] p-3 rounded-lg ${
                message.sender === 'ai'
                  ? 'bg-slate-100 text-slate-900'
                  : 'bg-blue-600 text-white'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
              <p className="text-xs text-slate-400 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="flex gap-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your health..."
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            className="bg-emerald-600 hover:bg-emerald-700"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">
          AI responses are for informational purposes only. Always consult your doctor.
        </p>
      </div>
    </div>
  );
}
