import React from 'react';
import {Navigate} from '@tanstack/react-router';

interface RoleGuardProps {
  allowedRoles: string[];
  userRole: string;
  children: React.ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  userRole,
  children,
}) => {
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
};

export default RoleGuard;
