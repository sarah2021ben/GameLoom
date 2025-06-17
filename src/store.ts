import { create } from 'zustand';
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchItem?: string ;
}
interface GameQueryStore {
  gameQuery: GameQuery; 
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchItem: (searchItem: string) => void;
}
 const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) => set((state) => ({gameQuery: { ...state.gameQuery, genreId },})),
  setPlatformId: (platformId) => set((state) => ({gameQuery: { ...state.gameQuery, platformId },})),
  setSortOrder: (sortOrder) => set((state) => ({gameQuery: { ...state.gameQuery, sortOrder },})),
  setSearchItem: (searchItem) => set(() => ({gameQuery: {  searchItem },})),
}));
export default useGameQueryStore;