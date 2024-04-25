<div x-data="{\n  menuItems: [\n      {\n          name: 'Products',\n      },\n      {\n          name: 'Documentation',\n      },\n      {\n          name: 'Features',\n      },\n      {\n          name: 'Partners',\n      },\n      {\n          name: 'Industry',\n      },\n      {\n        name: 'Feedback',\n    },\n    {\n      name: 'Tech stack',\n  },\n  ],\n  searchFieldVal: '',\n  state: false,\n  selectedItem: { item: null, idx: null },\n  handleSearch: function(e) {\n      const searchVal = e.target.value.toLocaleLowerCase();\n      const alrtEl = document.getElementById('li-alert');\n      this.searchFieldVal = e.target.value;\n      const handleAlert = () => {\n          if (this.menuItems.filter(item => item.name.toLocaleLowerCase().includes(searchVal)).length == 0) alrtEl.classList.remove('hidden');\n          else alrtEl.classList.add('hidden');\n      };\n      handleAlert();\n      setTimeout(() => handleAlert(), 100);\n  }\n}" className="relative max-w-xs px-4 text-base">
  <div onClick={event => {}} className="label-button flex items-center gap-1 px-2 border rounded-lg shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text" placeholder="Type to search" className="w-full px-2 py-2 text-base-content bg-transparent rounded-md outline-none" x-model="searchFieldVal" onInput={event => {}} onFocus={event => {}} />
    <template x-if="searchFieldVal" />
    <template x-if="!searchFieldVal" />
  </div>
  <template x-if="state" />
</div>