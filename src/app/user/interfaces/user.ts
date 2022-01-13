export class User {
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  //   groupId?: number;
  //   userGroup?: UserGroup[] = [];
  attachedCustomer?: number;
}

// export interface UserGroup {
//   ruleId?: number;
//   groupId?: number;
//   accessRule?: AccessRule[] = [];
//   groupName?: string;
// }

// export interface AccessRule {
//   ruleId?: number;
//   ruleName?: number;
//   users?: UserGroup = [];
//   permission?: boolean;
// }
