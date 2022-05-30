import Input from 'components/atoms/input'
import React, { FC, FormEvent } from 'react'

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface SearchFormProps {
  onSubmitSearch: (search: string) => void
}

const SearchForm: FC<SearchFormProps> = ({ onSubmitSearch }) => {
  const handleSubmit = (event: FormEvent<SearchFormElement>) => {
    event.preventDefault()
    onSubmitSearch(event.currentTarget.elements.searchInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 sm:mt-0 ml-2 inline-flex items-center relative">
        <Input
          id="searchInput"
          name="searchInput"
          type="text"
          className="pr-20"
          placeholder="Search people, planets, starships..."
        />
        <button
          className="bg-black absolute mt-1 right-1 text-stone-200 px-2 py-1 my-auto rounded-md"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm
