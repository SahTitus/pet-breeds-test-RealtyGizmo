import { BreedContent } from '@/components/pages/BreedContent';
import { endpoints } from '@/lib/constants'
import { fetchData } from '@/lib/fetchData'
import { isDogId } from '@/util';
import React from 'react'

const page = async (params: any) => {
  const { id } = params.params;

  const endpoint = isDogId(id) ? endpoints.dogs : endpoints.cats;

  const breed = await fetchData(`${endpoint}/${id}`);

  return (
    <main>
      <BreedContent isDog={isDogId(id)} breed={breed} />
    </main>
  )
}

export default page;