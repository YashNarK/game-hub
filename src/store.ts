import { GameQuery } from "./interfaces/game.type";
import { GenreData } from "./interfaces/genre.type";
import { Page } from "./interfaces/page.type";
import { ParentPlatformData } from "./interfaces/platform.type";
import { create } from "zustand";

interface GameQueryStoreType {
  gameQuery: GameQuery;
  page: Page;
  onSetPage: (
    nextPage: string | null | undefined,
    prevPage: string | null | undefined
  ) => void;
  handleClear: () => void;
  handleGenreSelect: (selectedGenre: GenreData | null) => void;
  handlePlatformSelect: (selectedPlatform: ParentPlatformData | null) => void;
  handleSortSelect: (selectedSortOption: string | null) => void;
  handleSearch: (searchString: string | undefined) => void;
  handleTyping: (searchString: string | undefined) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleAscDescToggle: () => void;
}

const useGameQueryStore = create<GameQueryStoreType>((set) => ({
  gameQuery: {page:1} as GameQuery,
  page: {
    hasNextPage: false,
    hasPrevPage: false,
  },
  onSetPage: (
    nextPage: string | null | undefined,
    prevPage: string | null | undefined
  ) =>
    set((store) => ({
      page: {
        ...store.page,
        hasNextPage: Boolean(nextPage),
        hasPrevPage: Boolean(prevPage),
      },
    })),
  handleClear: () =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        isAscending: undefined,
        ordering: undefined,
        platform: undefined,
        platformName: undefined,
        page: 1,
      },
    })),
  handleGenreSelect: (selectedGenre: GenreData | null) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreName: selectedGenre?.slug,
        genre: selectedGenre,
        page: 1,
      },
    })),
  handlePlatformSelect: (selectedPlatform: ParentPlatformData | null) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformName: selectedPlatform?.slug,
        platform: selectedPlatform,
        page: 1,
      },
    })),
  handleSortSelect: (selectedSortOption: string | null) =>
    set((store) => {
      {
        if (selectedSortOption) {
          return {
            gameQuery: {
              ...store.gameQuery,
              ordering: selectedSortOption,
              isAscending: true,
            },
          };
        } else {
          return {
            gameQuery: {
              ...store.gameQuery,
              ordering: null,
              isAscending: undefined,
            },
          };
        }
      }
    }),
  handleSearch: (searchString: string | undefined) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        search: searchString,
        page: 1,
      },
    })),
  handleTyping: (searchString: string | undefined) =>
    set((store) => {
      if (!searchString) {
        return {
          gameQuery: { ...store.gameQuery, search: searchString, page: 1 },
        };
      }
      return store;
    }),
  handleNextPage: () =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, page: store.gameQuery.page + 1 },
    })),
  handlePrevPage: () =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, page: store.gameQuery.page - 1 },
    })),
  handleAscDescToggle: () =>
    set((store) => {
      let newOrdering: string | null;
      if (store.gameQuery.isAscending)
        newOrdering = `-${store.gameQuery.ordering}`;
      else {
        newOrdering =
          store.gameQuery.ordering?.slice(0, 1) === "-"
            ? store.gameQuery.ordering?.slice(1)
            : null;
      }
      return {
        gameQuery: {
          ...store.gameQuery,
          isAscending: !store.gameQuery.isAscending,
          ordering: newOrdering,
        },
      };
    }),
}));

export default useGameQueryStore;
