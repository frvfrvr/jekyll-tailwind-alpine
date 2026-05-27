---
layout: default
title: Welcome
---

<div class="text-center py-12">
    <h1 class="text-4xl font-extrabold text-indigo-600 mb-4">Jekyll + Tailwind + Alpine.js</h1>
    <p class="text-gray-600 mb-8 text-lg">The ultimate lightweight, programmable static stack.</p>

    <div x-data="{ open: false }" class="max-w-sm mx-auto mt-10">
        <button @click="open = !open" 
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition active:scale-95">
            Test Alpine.js
        </button>

        <div x-show="open" 
             x-transition:enter="transition ease-out duration-300"
             x-transition:enter-start="opacity-0 scale-90"
             x-transition:enter-end="opacity-100 scale-100"
             class="mt-6 p-6 bg-white border border-gray-200 rounded-xl shadow-md text-gray-700">
            🚀 It works! Alpine.js and Tailwind are now synced.
        </div>
    </div>
</div>