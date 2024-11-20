<template>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h3>Draggable 1</h3>
          <draggable
            class="list-group"
            :list="list1"
            group="people"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element, index }">
              <div class="list-group-item">{{ element.name }} {{ index }}</div>
            </template>
          </draggable>
        </div>
  
        <div class="col-3">
          <h3>Draggable 2</h3>
          <draggable
            class="list-group"
            :list="list2"
            group="people"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element, index }">
              <div class="list-group-item">{{ element.name }} {{ index }}</div>
            </template>
          </draggable>
        </div>
  
        <!-- Optionally place rawDisplayer in separate rows or adjust column sizes -->
        <div class="col-3">
          <rawDisplayer :value="list1" title="List 1" />
        </div>
  
        <div class="col-3">
          <rawDisplayer :value="list2" title="List 2" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import draggable from "vuedraggable";
  
  export default {
    components: {
      draggable
    },
    data() {
      return {
        list1: [
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ],
        list2: [
          { name: "Juan", id: 5 },
          { name: "Edgard", id: 6 },
          { name: "Johnson", id: 7 }
        ]
      };
    },
    methods: {
      add: function() {
        this.list.push({ name: "Juan" });
      },
      replace: function() {
        this.list = [{ name: "Edgard" }];
      },
      clone: function(el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function(evt) {
        window.console.log(evt);
      }
    }
  };
  </script>
  
  <style scoped>
  .row {
    display: flex;
  }
  .list-group {
    background-color: #646464;
    border-radius: 5px;
    padding: 0;
  }
  
  .list-group-item {
    background-color: #2e2e2e;
    border-top: 1px solid #ddd;
    padding: 10px;
    cursor: grab;
    transition: background-color 0.3s ease;
  }
  
  .list-group-item:hover {
    background-color: #eaeaea;
  }
  
  .list-group-item.active {
    background-color: #cfd8dc;
    cursor: grabbing;
  }
  
  /* Styles for dragging */
  .list-group-item-dragging {
    opacity: 0.7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .list-group-item {
      font-size: 14px;
    }
  }
  </style>