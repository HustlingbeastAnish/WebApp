import React from "react";import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const TakeAttend = () => {
    
  return (
    <>
      <button
        id="dropdownUsersButton"
        data-dropdown-toggle="dropdownUsers"
        data-dropdown-placement="bottom"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Project users{" "}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownUsers"
        className="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700"
      >
        <ul
          className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUsersButton"
        >
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-1.jpg"
                alt=".."
              />
              Jese Leos
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-2.jpg"
                alt=".."
              />
              Robert Gough
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-3.jpg"
                alt=".."
              />
              Bonnie Green
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-4.jpg"
                alt=".."
              />
              Leslie Livingston
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-5.jpg"
                alt=".."
              />
              Michael Gough
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-2.jpg"
                alt=".."
              />
              Joseph Mcfall
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-3.jpg"
                alt=".."
              />
              Roberta Casas
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-2 w-6 h-6 rounded-full"
                // src="/docs/images/people/profile-picture-1.jpg"
                alt=".."
              />
              Neil Sims
            </a>
          </li>
        </ul>
        <a
          href="/#"
          className="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
        >
          <svg
            className="mr-1 w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
          Add new user
        </a>
      </div>
    </>
  );
};

export default TakeAttend;
