---
layout: default
title: Welcome
---

<div class="text-center py-12">
    <h1 class="text-4xl font-extrabold text-indigo-600 mb-4">Jekyll + Tailwind + Alpine.js</h1>
    <p class="text-gray-600 mb-8">The ultimate lightweight, programmable static stack.</p>

    <div x-data="{ open: false }" class="max-w-sm mx-auto">
        <button @click="open = !open" 
                class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded shadow transition">
            Test Alpine.js
        </button>

        <div x-show="open" 
             x-transition
             class="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-700">
            🚀 It works! Alpine.js is successfully handling this toggle state.
        </div>
    </div>
</div>