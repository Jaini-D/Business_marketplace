import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  uid: string | null;
  companyId: string | null;
  setUid: (uid: string | null) => void;
  setCompanyId: (companyId: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  uid: null,
  companyId: null,
  setUid: () => {},
  setCompanyId: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uid, setUid] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ uid, companyId, setUid, setCompanyId }}>
      {children}
    </AuthContext.Provider>
  );
};
