import { defineMessages } from 'react-intl';

export default defineMessages({
  title: 'Settings · Organizations',
  create: 'Create',
  createOrganization: 'Create new Organization',
  createOrganizationConflict: 'An organization with this name already exists.',
  createOrganizationError: 'Something went wrong when trying to create this organization.',
  createOrganizationSuccess: 'Successfully created organization {organization}.',
  organizationName: 'Organization name',
  organizationId: 'Organization identifier',
  manageOrganization: 'Manage Organization',
  organizationMembers: '{organization} members',
  selectedOrganization: 'Selected organization',
  member: 'Member',
  actions: 'Actions',
  you: 'It’s you!',
  email: 'Email',
  cancel: 'Cancel',
  inviteMember: 'Invite member',
  inviteMemberError: 'Something went wrong when trying to invite this member.',
  inviteMemberNotFound: 'No member with this email address could be found.',
  inviteMemberNotVerified: 'This email address has not been verified.',
  inviteMemberConflict: 'This member is already in this organization',
  resendInvitation: 'Resend invitation email',
  resendInvitationSent: 'Resent invitation email',
  addMemberEmail: 'Invite new member by email',
  existingMemberWarning: 'This member already exists in this organization.',
  inviteMemberSuccess: 'Successfully invited {email}',
  removeMember: 'Remove member',
  removeMemberWarningTitle: 'Removing member',
  removeMemberWarning: 'Are you sure you want to remove this member from this organization?',
  removeMemberSuccess: 'Successfully removed member',
  leaveOrganization: 'Leave organization',
  leaveOrganizationWarningTitle: 'Leaving organization',
  leaveOrganizationWarning: 'Are you sure you want to leave this organization',
  leaveOrganizationSuccess: 'Successfully left organization {organization}.',
  removeInviteWarningTitle: 'Revoking invitation',
  removeInviteWarning: 'Are you sure you want to revoke this invitation?',
  removeInviteSuccess: 'Successfully revoked invitation',
  removeInvite: 'Revoke invitation',
});
