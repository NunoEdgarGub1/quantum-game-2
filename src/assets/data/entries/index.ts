import { IEntryList, IEntry } from '@/engine/interfaces'
import relatedConcepts from './related-concepts.json'
import entries from './entries.json'

export const typedEntries: IEntryList = entries
export const typedRelatedConcepts: IEntryList = relatedConcepts

// used by views/Info to render link lists:
export const entriesNameList = Object.keys(typedEntries)
export const relatedConceptsNameList = Object.keys(typedRelatedConcepts)

// used by Encyclopedia Article
export function getEntry(name: string): IEntry {
  let entry
  if (entriesNameList.includes(name)) {
    entry = typedEntries[name]
  } else if (relatedConceptsNameList.includes(name)) {
    entry = typedRelatedConcepts[name]
  } else {
    throw new Error(`Encyclopedia Entry not found: ${name}`)
  }
  return entry
}
