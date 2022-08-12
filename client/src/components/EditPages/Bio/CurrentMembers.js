import React, { useEffect } from 'react';
import axios from 'axios';
import { fetchMembers } from '../../../actions';
import { connect } from 'react-redux';
import Accordion from '../Bootstrap/Accordion';
import AddMember from './AddMember';
import editMemberFields from './editMemberFields';
import { Instagram } from './socialMediaIcons';

const CurrentMembers = ({ fetchMembers, members }) => {

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);


  const deleteMember = id => {
    axios.get(`/api/deleteMember/${id}`).then(res => {
      fetchMembers();
      console.log('DELETED MEMBER', res);
    });
  };

  const editFields = member => {
    return editMemberFields(member);
  };

  const editMember = (_id, { bioPic, name, role, instaTag }) => {
    const newPhoto = bioPic ? bioPic[0] : '';

    const updatedMember = {
      id: _id,
      bioPic: newPhoto,
      name,
      role,
      instaTag
    };

    const payload = new FormData();
    for (let key in updatedMember) {
      payload.append(key, updatedMember[key]);
    }

    axios.post(`/api/updateMember/${_id}`, payload).then(res => {
      fetchMembers();
    }).catch(err => console.log(err));

  }

  const accordionItems = [];

  const createAccordionItems = () => {
    members.map((member, index) => {
      const { _id, bioPic, name, role, instaTag } = member;
      return accordionItems.push({
        data: member,
        group: 'members',
        id: _id,
        name,
        header: name,
        img: bioPic,
        subhead: role,
        content: [
          { prefix: <Instagram />, value: instaTag }
        ]
      });
    });
  }
  createAccordionItems();

  return (
    <>
      <Accordion
        id="membersList"
        title="Members"
        items={accordionItems}
        editFields={editFields}
        onEdit={editMember}
        onDelete={deleteMember}
      />
      < AddMember />
    </>
  );
}

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(CurrentMembers);