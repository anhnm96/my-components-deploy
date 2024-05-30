import { aD as defineComponent, at as ref, av as computed, aU as watch, b2 as nextTick, as as _export_sfc, b5 as resolveDirective, aw as openBlock, aH as createElementBlock, aP as withDirectives, bc as vModelText, aG as createBaseVNode, aR as mergeProps, b9 as withKeys, aS as withModifiers, aB as normalizeClass, aA as normalizeStyle, aJ as Fragment, aI as renderList, az as renderSlot, aL as toDisplayString, aK as createCommentVNode } from "./vendor-Cr-HhYtu.js";
const _sfc_main = defineComponent({
  name: "Autocomplete",
  inheritAttrs: false,
  props: {
    containerClass: {
      type: String,
      default: ""
    },
    menuClass: {
      type: String,
      default: "shadow mt-2 bg-white"
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAdapter: {
      type: Function,
      default: (value) => ({
        id: value,
        label: value,
        value
      })
    },
    input: {
      type: String,
      default: void 0
    },
    selected: {
      type: [Array, String, Number, Object],
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    blurOnSelect: {
      type: Boolean,
      default: false
    },
    useFilter: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Function,
      default: (keyword, item) => item.label.toLowerCase().includes(keyword.toLowerCase())
    }
  },
  emits: ["update:input", "update:selected", "select"],
  setup(props, { emit }) {
    const timeId = Date.now();
    const show = ref(false);
    const inputEl = ref();
    const isDirty = ref(false);
    const hoverIndex = ref(0);
    const localInput = ref("");
    const useLocalValue = props.input === void 0;
    const inputValue = computed({
      set: (value) => {
        isDirty.value = true;
        if (props.useFilter)
          hoverIndex.value = 0;
        useLocalValue ? localInput.value = value : emit("update:input", value);
      },
      get: () => {
        return useLocalValue ? localInput.value : props.input;
      }
    });
    function close() {
      show.value = false;
      isDirty.value = false;
    }
    const dropdownEl = ref();
    function keyboardNavigate(direction) {
      if (show.value) {
        const step = direction === "down" ? 1 : -1;
        let nextIndex = hoverIndex.value + step;
        if (nextIndex >= props.options.length)
          nextIndex = props.options.length - 1;
        else if (nextIndex < 0)
          nextIndex = 0;
        hoverIndex.value = nextIndex;
        const list = dropdownEl.value.querySelector(".dropdown-content");
        const element = list.querySelectorAll("li:not(.is-disabled)")[nextIndex];
        if (!element)
          return;
        const visMin = list.scrollTop;
        const visMax = list.scrollTop + list.clientHeight - element.clientHeight;
        if (element.offsetTop < visMin) {
          list.scrollTop = element.offsetTop;
        } else if (element.offsetTop >= visMax) {
          list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
        }
      } else {
        show.value = true;
      }
    }
    const isListInViewportVertically = ref(true);
    function calcDropdownInViewportVertical() {
      nextTick(() => {
        if (dropdownEl.value === void 0)
          return;
        const rect = dropdownEl.value.getBoundingClientRect();
        isListInViewportVertically.value = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      });
    }
    watch(show, (newVal) => {
      if (newVal) {
        calcDropdownInViewportVertical();
      }
    });
    const adaptedSelects = computed(() => {
      return props.selected.map(
        (selectedOpt) => props.optionAdapter(selectedOpt)
      );
    });
    const adaptedOptions = computed(() => {
      if (!props.multiple)
        return props.options.map((option) => props.optionAdapter(option));
      return props.options.map((option) => {
        const adaptedOption = props.optionAdapter(option);
        adaptedOption.selected = adaptedSelects.value.some(
          (i) => i.id === adaptedOption.id
        );
        return adaptedOption;
      });
    });
    const filteredOptions = computed(() => {
      if (!props.useFilter || !isDirty.value)
        return adaptedOptions.value;
      return adaptedOptions.value.filter(
        (i) => props.filter(inputValue.value, i)
      );
    });
    function select(item) {
      let payload;
      if (props.multiple) {
        payload = [...props.selected];
        const foundIndex = adaptedSelects.value.length > 0 ? adaptedSelects.value.findIndex((i) => i.id === item.id) : -1;
        if (foundIndex > -1) {
          payload.splice(foundIndex, 1);
        } else {
          payload.push(item.value);
        }
      } else {
        inputValue.value = item.label;
        payload = item.value;
        if (props.blurOnSelect)
          inputEl.value.blur();
        else
          inputEl.value.focus();
        close();
      }
      emit("update:selected", payload);
      emit("select", item.value);
    }
    function safeSalect(item) {
      if (show.value && item) {
        select(item);
      }
    }
    return {
      timeId,
      show,
      inputEl,
      inputValue,
      close,
      hoverIndex,
      dropdownEl,
      keyboardNavigate,
      calcDropdownInViewportVertical,
      isListInViewportVertically,
      adaptedOptions,
      filteredOptions,
      select,
      safeSalect
    };
  }
});
const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = ["aria-controls", "aria-activedescendant"];
const _hoisted_3 = ["id"];
const _hoisted_4 = ["id", "aria-selected", "onMouseenter"];
const _hoisted_5 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock("div", {
    role: "combobox",
    "aria-expanded": _ctx.show,
    "aria-owns": `VAutocomplete__${_ctx.timeId}--listbox`,
    "aria-haspopup": "listbox",
    class: normalizeClass(["relative", _ctx.containerClass])
  }, [
    withDirectives(createBaseVNode("input", mergeProps({
      ref: "inputEl",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
      type: "text",
      autocomplete: "off",
      "aria-autocomplete": "list",
      "aria-controls": `VAutocomplete__${_ctx.timeId}--listbox`,
      "aria-activedescendant": `VAutocomplete__${_ctx.timeId}--opt${_ctx.hoverIndex}`
    }, _ctx.$attrs, {
      onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.show = false, ["prevent"]), ["esc"])),
      onKeydown: [
        _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => _ctx.keyboardNavigate("down"), ["prevent"]), ["down"])),
        _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.keyboardNavigate("up"), ["prevent"]), ["up"])),
        _cache[4] || (_cache[4] = withKeys(($event) => _ctx.safeSalect(_ctx.filteredOptions[_ctx.hoverIndex]), ["enter"])),
        _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.safeSalect(_ctx.filteredOptions[_ctx.hoverIndex]), ["prevent"]), ["tab"]))
      ],
      onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.show = true),
      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.show = true)
    }), null, 16, _hoisted_2), [
      [vModelText, _ctx.inputValue]
    ]),
    _ctx.show ? withDirectives((openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        ref: "dropdownEl",
        class: normalizeClass(["absolute z-50 w-full", [_ctx.menuClass]]),
        style: normalizeStyle({ bottom: !_ctx.isListInViewportVertically ? "100%" : "" })
      },
      [
        createBaseVNode("ul", {
          id: `VAutocomplete__${_ctx.timeId}--listbox`,
          role: "listbox",
          class: "dropdown-content"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.filteredOptions, (item, index) => {
              return openBlock(), createElementBlock("li", {
                id: `VAutocomplete__${_ctx.timeId}--opt${index}`,
                key: index,
                role: "option",
                "aria-selected": index === _ctx.hoverIndex,
                onMouseenter: ($event) => _ctx.hoverIndex = index
              }, [
                renderSlot(_ctx.$slots, "option", {
                  item,
                  isActive: index === _ctx.hoverIndex,
                  select: _ctx.select,
                  close: _ctx.close
                }, () => [
                  createBaseVNode("div", {
                    class: normalizeClass(["block cursor-pointer select-none truncate px-4 py-2 text-left text-sm", [
                      index === _ctx.hoverIndex && "bg-gray-200 opacity-50",
                      item.selected && "bg-blue-300 text-blue-500"
                    ]]),
                    onClick: ($event) => _ctx.select(item)
                  }, toDisplayString(item.label), 11, _hoisted_5)
                ])
              ], 40, _hoisted_4);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, _hoisted_3)
      ],
      6
      /* CLASS, STYLE */
    )), [
      [_directive_click_outside, _ctx.close, "parent"]
    ]) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
_sfc_main.__file = "components/custom/autocomplete/Autocomplete.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/autocomplete/Autocomplete.vue"]]);
export {
  __nuxt_component_0 as _
};
