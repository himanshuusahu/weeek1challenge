import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { RecipeGrid } from './components/RecipeGrid';
import { RecipeModal } from './components/RecipeModal';
import { VoiceStudio } from './components/VoiceStudio';
import { AskGrandpaRAG } from './components/AskGrandpaRAG';
import { PartnerHub } from './components/PartnerHub';
import { AgentTracesView } from './components/AgentTracesView';
import { SubmissionModal } from './components/SubmissionModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('recipes');
  const [isParchment, setIsParchment] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);

  useEffect(() => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(data => {
        if (data.success) setRecipes(data.data);
      })
      .catch(err => console.error(err));
  }, []);

  const toggleTheme = () => {
    setIsParchment(!isParchment);
    if (!isParchment) {
      document.body.classList.add('theme-parchment');
    } else {
      document.body.classList.remove('theme-parchment');
    }
  };

  const handleNewRecipe = (newRec) => {
    setRecipes(prev => [newRec, ...prev]);
    setSelectedRecipe(newRec);
  };

  return (
    <div>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleTheme={toggleTheme}
        isParchment={isParchment}
        openSubmissionModal={() => setIsSubmissionOpen(true)}
      />

      <main class="app-container">
        <HeroBanner setActiveTab={setActiveTab} />

        {activeTab === 'recipes' && (
          <RecipeGrid recipes={recipes} onOpenRecipe={setSelectedRecipe} />
        )}
        {activeTab === 'studio' && (
          <VoiceStudio onNewRecipe={handleNewRecipe} />
        )}
        {activeTab === 'rag' && (
          <AskGrandpaRAG />
        )}
        {activeTab === 'traces' && (
          <AgentTracesView />
        )}
        {activeTab === 'partners' && (
          <PartnerHub />
        )}
      </main>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      <SubmissionModal isOpen={isSubmissionOpen} onClose={() => setIsSubmissionOpen(false)} />
    </div>
  );
}
