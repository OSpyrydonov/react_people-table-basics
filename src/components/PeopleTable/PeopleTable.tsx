import React from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { Person } from '../../types';

import { PersonLink } from '../PersonLink';

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { slug } = useParams();

  return (
    <tbody>
      {people.map(person => {
        const {
          name,
          sex,
          born,
          died,
          fatherName,
          motherName,
          father,
          mother,
        } = person;

        return (
          <tr
            key={person.slug}
            data-cy="person"
            className={cn({
              'has-background-warning': slug === person.slug,
            })}
          >
            <td>
              <PersonLink
                person={person}
                className={cn({
                  'has-text-danger': sex === 'f',
                })}
              >
                {name}
              </PersonLink>
            </td>

            <td>{sex}</td>
            <td>{born}</td>
            <td>{died}</td>

            <td>
              {mother ? (
                <PersonLink className="has-text-danger" person={mother}>
                  {motherName}
                </PersonLink>
              ) : (
                motherName || '-'
              )}
            </td>

            <td>
              {father ? (
                <PersonLink person={father}>{fatherName}</PersonLink>
              ) : (
                fatherName || '-'
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
