export interface IBreadcrumbProps {
  title: string;
  breadcrumbItems: string[];
  modalOpenHandler?: () => void;
  isModalOpen?: boolean;
}
