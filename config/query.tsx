import { DocumentNode, gql } from '@apollo/client';

export const projectList: DocumentNode = gql`
query {
  projects {
    id
    createdAt
    updatedAt
    title
    description
    agora_app_id
    agora_customer_id
    agora_app_certificate
    agora_customer_certificate
    primary_color
    primary_logo
    primary_square_logo
    primary_bg_logo
    illustration_file
    pstn_dial_in
    pstn_turbo_bridge_name
    pstn_turbo_bridge_password
    precall_screen
    chat
    cloud_recording
    screen_share
    video_encryption
    s3_bucket_region
    s3_bucket_name
    s3_bucket_access_key
    s3_bucket_access_secret
    app_backend_url
    app_backend_deploy_status
    ownerId
  }
}
`;

export const allUsers = gql`
query {
  allUsers {
    id
    name
    username
    projects {
      id
      createdAt
      updatedAt
      title
      description
      agora_app_id
      agora_customer_id
      agora_app_certificate
      agora_customer_certificate
      primary_color
      primary_logo
      primary_square_logo
      primary_bg_logo
      illustration_file
      pstn_dial_in
      pstn_turbo_bridge_name
      pstn_turbo_bridge_password
      precall_screen
      chat
      cloud_recording
      screen_share
      video_encryption
      s3_bucket_region
      s3_bucket_name
      s3_bucket_access_key
      s3_bucket_access_secret
      ownerId
    }
  }
}
`;

export const projectById = (id: number): DocumentNode => {
  return gql`
query {
  projectById(id: ${id}) {
    id
    createdAt
    updatedAt
    title
    description
    agora_app_id
    agora_customer_id
    agora_app_certificate
    agora_customer_certificate
    primary_color
    primary_logo
    primary_square_logo
    primary_bg_logo
    illustration_file
    pstn_dial_in
    pstn_turbo_bridge_name
    pstn_turbo_bridge_password
    precall_screen
    chat
    cloud_recording
    screen_share
    video_encryption
    s3_bucket_region
    s3_bucket_name
    s3_bucket_access_key
    s3_bucket_access_secret
    app_backend_url
    app_backend_deploy_status
    ownerId
  }
}`;
}