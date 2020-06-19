import React from 'react'
import Card from './Card';
import Candidate from './Candidate'

export default function Candidates({candidates}) {
    return (
        <div>
            {candidates.map((candidate, index) => {
                return <Card key={candidate.id}><Candidate candidate={candidate} position={index + 1}/></Card>
            })}
        </div>
    )
}
