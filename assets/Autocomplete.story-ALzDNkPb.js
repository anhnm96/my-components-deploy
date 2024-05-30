import { _ as __nuxt_component_0 } from "./Autocomplete-DXl7moCK.js";
import { as as _export_sfc, aD as defineComponent, at as ref, aE as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, aG as createBaseVNode, aF as createVNode, aB as normalizeClass, aL as toDisplayString } from "./vendor-Cr-HhYtu.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Autocomplete.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize"
    ];
    const people = [
      {
        name: "Sandra Adams",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        name: "Ali Connors",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        name: "Trevor Hansen",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        name: "Tucker Smith",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      }
    ];
    function peopleAdapter(item) {
      return {
        id: item.name,
        label: item.name,
        value: item
      };
    }
    const selectedPeople = ref([]);
    const __returned__ = { countries, people, peopleAdapter, selectedPeople };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mx-auto w-60" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Single select",
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "mx-auto mt-10 w-60" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Multiple select",
  -1
  /* HOISTED */
);
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "h-5 w-5" };
const _hoisted_7 = ["src", "alt"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Autocomplete = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Autocomplete" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_Autocomplete, {
          class: "w-full border border-solid border-gray-400 px-2 py-1",
          placeholder: "Select country",
          options: $setup.countries,
          "use-filter": true
        })
      ]),
      createBaseVNode("div", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_Autocomplete, {
          selected: $setup.selectedPeople,
          "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selectedPeople = $event),
          "option-adapter": $setup.peopleAdapter,
          options: $setup.people,
          multiple: true,
          placeholder: $setup.selectedPeople.length ? `${$setup.selectedPeople.length} options selected` : "Select member basic",
          class: "block w-full border border-gray-400 px-2 py-1"
        }, {
          option: withCtx(({ item, isActive, select }) => [
            createBaseVNode("div", {
              class: normalizeClass(["flex cursor-pointer select-none items-center space-x-4 truncate px-4 py-2", [
                isActive && "bg-gray-200 opacity-50",
                item.selected && "bg-blue-300 text-blue-500"
              ]]),
              onClick: ($event) => select(item)
            }, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("img", {
                  class: "rounded-full",
                  src: item.value.avatar,
                  alt: item.value.name
                }, null, 8, _hoisted_7)
              ]),
              createBaseVNode("div", null, [
                createBaseVNode(
                  "p",
                  null,
                  toDisplayString(item.value.name),
                  1
                  /* TEXT */
                )
              ])
            ], 10, _hoisted_5)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["selected", "placeholder"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/autocomplete/Autocomplete.story.vue";
const Autocomplete_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/autocomplete/Autocomplete.story.vue"]]);
export {
  Autocomplete_story as default
};
