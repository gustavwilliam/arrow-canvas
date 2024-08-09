<template>
  <div
    class="bg-white dark:bg-gray-900 border-b dark:border-b-gray-800 w-full flex items-center gap-2 p-2 z-50 shadow-md dark:shadow-gray-800"
  >
    <div class="uppercase py-2">
      <h1 class="font-bold -mb-2">Godi.se</h1>
      <h1>Arrows</h1>
    </div>
    <div class="flex flex-row h-full">
      <MenuGroup v-if="stateStore.tool.value === 'draw'">
        <TheDropdown name="Tileset">
          <button
            class="select-none px-2 py-2 flex flex-row gap-1 rounded-md items-center justify-center border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 hover:dark:bg-gray-700 hover:disabled:bg-inherit disabled:text-gray-300 dark:disabled:text-gray-700"
          >
            <TheTilesetDisplay :name="stateStore.tileset"></TheTilesetDisplay>
          </button>
          <DropdownContent>
            <DropdownItem
              group="tileset"
              value="arrows"
              name="Arrows"
              v-model:activeItem="stateStore.tileset"
            >
              <TheTilesetDisplay name="arrows"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem
              group="tileset"
              value="lemoji"
              name="Lemoji"
              v-model:activeItem="stateStore.tileset"
            >
              <TheTilesetDisplay name="lemoji"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem
              group="tileset"
              value="pinia"
              name="Pinia"
              v-model:activeItem="stateStore.tileset"
            >
              <TheTilesetDisplay name="pinia"></TheTilesetDisplay>
            </DropdownItem>
          </DropdownContent>
        </TheDropdown>
      </MenuGroup>
      <MenuSection
        v-if="stateStore.tool.value === 'select'"
        v-shortkey="['backspace']"
        @shortkey="selectionStore.deleteLine"
      >
        <div class="flex items-center h-full mr-1">
          {{ selectionStore.hasSelection ? "1" : "No" }} item selected
        </div>
        <TheDropdown v-if="selectionStore.hasSelection">
          <button
            class="select-none px-2 py-2 flex flex-row gap-1 rounded-md items-center justify-center border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:disabled:bg-inherit disabled:text-gray-300 dark:disabled:text-gray-400"
          >
            <TheTilesetDisplay
              :name="selectionStore.line.tileset"
            ></TheTilesetDisplay>
          </button>
          <DropdownContent>
            <DropdownItem
              group="tileset"
              value="arrows"
              name="Arrows"
              v-model:activeItem="selectionStore.line.tileset"
            >
              <TheTilesetDisplay name="arrows"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem
              group="tileset"
              value="lemoji"
              name="Lemoji"
              v-model:activeItem="selectionStore.line.tileset"
            >
              <TheTilesetDisplay name="lemoji"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem
              group="tileset"
              value="pinia"
              name="Pinia"
              v-model:activeItem="selectionStore.line.tileset"
            >
              <TheTilesetDisplay name="pinia"></TheTilesetDisplay>
            </DropdownItem>
          </DropdownContent>
        </TheDropdown>
        <MenuButton
          v-if="selectionStore.hasSelection"
          name="Delete"
          :onClick="selectionStore.deleteLine"
          ><TrashIcon
        /></MenuButton>
      </MenuSection>
    </div>
  </div>
</template>

<script setup>
import MenuSection from "./MenuSection.vue";
import MenuGroup from "./MenuGroup.vue";
import MenuButton from "./MenuButton.vue";
import TheDropdown from "@/components/Dropdown/TheDropdown.vue";
import DropdownContent from "@/components/Dropdown/DropdownContent.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import { useStateStore } from "@/stores/state";
import { useSelectionStore } from "@/stores/selection";
import TheTilesetDisplay from "@/components/TheTilesetDisplay.vue";
import { TrashIcon } from "@heroicons/vue/20/solid";

const stateStore = useStateStore();
const selectionStore = useSelectionStore();
</script>
