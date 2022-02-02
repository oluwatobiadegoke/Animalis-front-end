import { createSlice } from "@reduxjs/toolkit";

import { Media } from "../../../interfaces";

interface ModalState {
  isOpen: boolean;
  displayIndex: number;
  modalImgs: Media[];
}

const initialState: ModalState = {
  isOpen: false,
  displayIndex: 0,
  modalImgs: [],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.modalImgs = payload.modalImgs;
      state.displayIndex = payload.displayIndex;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalImgs = [];
      state.displayIndex = 0;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
