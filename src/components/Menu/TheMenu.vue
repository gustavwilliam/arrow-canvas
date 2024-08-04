<template>
  <div class="bg-white border-b w-full flex items-center gap-2 p-2 z-50 shadow-md">
    <div class="uppercase">
      <h1 class="font-bold -mb-2">Godi.se</h1>
      <h1>Arrows</h1>
    </div>
    <div class="flex flex-row h-full">
      <MenuGroup v-if="selectionStore.hasSelection">
        <div class="flex items-center h-full">
          1 item selected
        </div>
      </MenuGroup>
      <MenuGroup v-if="!selectionStore.hasSelection">
        <TheDropdown name="Tileset">
          <button class="select-none px-2 py-2 flex flex-row gap-1 rounded-md items-center justify-center border bg-gray-50 hover:bg-gray-100 hover:disabled:bg-inherit disabled:text-gray-300">
            <TheTilesetDisplay :name="stateStore.tileset"></TheTilesetDisplay>
          </button>
          <DropdownContent>
            <DropdownItem group="tileset" value="arrows" name="Arrows" v-model:activeItem="stateStore.tileset">
              <TheTilesetDisplay name="arrows"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem group="tileset" value="lemoji" name="Lemoji" v-model:activeItem="stateStore.tileset">
              <TheTilesetDisplay name="lemoji"></TheTilesetDisplay>
            </DropdownItem>
          </DropdownContent>
        </TheDropdown>
      </MenuGroup>
      <MenuGroup v-if="selectionStore.hasSelection">
        <TheDropdown name="Tileset">
          <button class="select-none px-2 py-2 flex flex-row gap-1 rounded-md items-center justify-center border bg-gray-50 hover:bg-gray-100 hover:disabled:bg-inherit disabled:text-gray-300">
            <TheTilesetDisplay :name="selectionStore.line.tileset"></TheTilesetDisplay>
          </button>
          <DropdownContent>
            <DropdownItem group="tileset" value="arrows" name="Arrows" v-model:activeItem="selectionStore.line.tileset">
              <TheTilesetDisplay name="arrows"></TheTilesetDisplay>
            </DropdownItem>
            <DropdownItem group="tileset" value="lemoji" name="Lemoji" v-model:activeItem="selectionStore.line.tileset">
              <TheTilesetDisplay name="lemoji"></TheTilesetDisplay>
            </DropdownItem>
          </DropdownContent>
        </TheDropdown>
      </MenuGroup>
      <MenuGroup v-if="selectionStore.hasSelection">
        <MenuButton name="Delete" :onClick="selectionStore.deleteLine"><TrashIcon /></MenuButton>
      </MenuGroup>
    </div>
  </div>
</template>

<script setup>
import MenuGroup from "./MenuGroup.vue";
import MenuButton from "./MenuButton.vue";
import TheDropdown from "../Dropdown/TheDropdown.vue";
import DropdownContent from "../Dropdown/DropdownContent.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";
import { TrashIcon } from "@heroicons/vue/20/solid";
import { useStateStore } from "../../stores/state";
import { useSelectionStore } from "../../stores/selection";
import TheTilesetDisplay from "../TheTilesetDisplay.vue";
import { onMounted, ref } from "vue";

const stateStore = useStateStore();
const selectionStore = useSelectionStore();
</script>