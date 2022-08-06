export default (member) => {
  const { bioPic, name, role, fbLink, instaTag, snapName } = member;
  return [
    {
      label: 'Upload Image',
      name: 'bioPic',
      type: 'image',
      initialValue: bioPic
    },
    { label: 'Name', name: 'name', type: 'text', initialValue: name },
    { label: 'Role', name: 'role', type: 'text', initialValue: role },
    { label: 'Facebook Link', name: 'fbLink', type: 'text', initialValue: fbLink },
    { label: 'Instagram Tag', name: 'instaTag', type: 'text', initialValue: instaTag },
    { label: 'Snapchat Username', name: 'snapName', type: 'text', initialValue: snapName }
  ];
}