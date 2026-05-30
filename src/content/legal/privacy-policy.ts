import type { LegalSection } from "@/components/legal-document";

export const privacyPolicyEffectiveDate = "April 27, 2026";

export const privacyPolicySections: LegalSection[] = [
  {
    title: "1. Introduction and Scope",
    blocks: [
      {
        type: "paragraph",
        text: 'This Privacy Policy ("Policy") describes how INAZU ("INAZU," "we," "us," or "our") collects, uses, discloses, and protects personal information when you use the INAZU mobile application, website at inazu.app, and related products, software, and services (collectively, the "Services").',
      },
      {
        type: "paragraph",
        text: "Please read this Policy together with our Terms and Conditions, which govern your use of the Services. By accessing or using the Services, you acknowledge that you have read and understood this Policy.",
      },
      {
        type: "paragraph",
        text: "For purposes of applicable data protection laws, INAZU acts as the data controller with respect to personal information processed through the Services, meaning we determine how and why personal information is collected and used.",
      },
    ],
  },
  {
    title: "2. Information We Collect",
    blocks: [
      {
        type: "subheading",
        text: "Information you provide",
      },
      {
        type: "paragraph",
        text: "We collect information you provide directly when you create an account, use the Services, or contact us, including:",
      },
      {
        type: "list",
        items: [
          "Account information, such as your email address, username, and password (if you choose password-based login).",
          "Authentication information used to verify your identity, including one-time passcodes sent to your email.",
          "Profile information you choose to provide, such as your display name, profile preferences, and vehicle or garage details.",
          "Ride notes or other text you attach to saved sessions.",
          "Communications you send to us, including support requests and feedback.",
        ],
      },
      {
        type: "subheading",
        text: "Ride and session data",
      },
      {
        type: "paragraph",
        text: "When you record or save a ride, we collect information about that session, including:",
      },
      {
        type: "list",
        items: [
          "GPS route and path data.",
          "Speed, distance, duration, movement time, and related performance metrics.",
          "Session summaries, charts, and recap information generated from your ride.",
          "Timestamps associated with recording, pausing, saving, or ending a session.",
          "Vehicle or garage selections linked to a saved session, where applicable.",
        ],
      },
      {
        type: "subheading",
        text: "Location information",
      },
      {
        type: "paragraph",
        text: "Location information is essential to the core functionality of the Services. To record rides, the App requires permission to access your device location, including precise GPS location during active sessions and, where enabled, location processing while the App runs in the background.",
      },
      {
        type: "paragraph",
        text: "If you disable location permissions, certain features—including live ride tracking—may not function. You can manage location permissions through your device settings at any time, subject to the limitations described in our Terms and Conditions.",
      },
      {
        type: "subheading",
        text: "Information collected automatically",
      },
      {
        type: "paragraph",
        text: "We automatically collect limited technical and usage information when you use the Services, such as:",
      },
      {
        type: "list",
        items: [
          "Device type, operating system version, app version, and language settings.",
          "Log files, crash reports, diagnostics, and performance data used to maintain and improve the Services.",
          "General usage information, such as feature interactions and session events within the App.",
        ],
      },
      {
        type: "subheading",
        text: "Social and connection data",
      },
      {
        type: "paragraph",
        text: "If you use social features within the Services, we may process information related to friend requests, connections, and interactions with other users, as permitted by your settings and the features available in the App.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We use personal information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "To create, authenticate, and maintain your account.",
          "To provide ride tracking, session recording, saved ride recaps, garage-linked statistics, and progress views.",
          "To enable offline and background recording features where supported by your device and permissions.",
          "To display weekly, monthly, and profile-level summaries of your activity.",
          "To support friend requests and other in-app social features you choose to use.",
          "To respond to your inquiries, provide customer support, and communicate with you about the Services.",
          "To maintain the security, integrity, and reliability of the Services, including detecting abuse, fraud, or unauthorized activity.",
          "To analyze usage trends and improve the performance, functionality, and user experience of the Services.",
          "To comply with applicable legal obligations and enforce our Terms and Conditions.",
        ],
      },
      {
        type: "paragraph",
        text: "We do not use your personal information for third-party advertising, and we do not sell your personal information.",
      },
    ],
  },
  {
    title: "4. How We Share Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We may share personal information in the following circumstances:",
      },
      {
        type: "subheading",
        text: "Service providers",
      },
      {
        type: "paragraph",
        text: "We use trusted third-party providers to help us operate the Services, such as hosting, infrastructure, email delivery for authentication messages, analytics, and customer support tools. These providers may access personal information only as necessary to perform services on our behalf and are required to protect it appropriately.",
      },
      {
        type: "subheading",
        text: "Other users",
      },
      {
        type: "paragraph",
        text: "Depending on the features you use and your in-app settings, certain profile information, activity summaries, or social interactions may be visible to other INAZU users. You are responsible for understanding how your information is shared through the App.",
      },
      {
        type: "subheading",
        text: "Legal and safety reasons",
      },
      {
        type: "paragraph",
        text: "We may disclose information if we believe in good faith that disclosure is necessary to comply with applicable law, regulation, legal process, or governmental request; to protect the rights, property, or safety of INAZU, our users, or others; or to investigate and address violations of our Terms and Conditions.",
      },
      {
        type: "subheading",
        text: "Business transfers",
      },
      {
        type: "paragraph",
        text: "If INAZU is involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, personal information may be transferred as part of that transaction, subject to applicable law.",
      },
    ],
  },
  {
    title: "5. Data Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We retain personal information for as long as reasonably necessary to provide the Services, fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      },
      {
        type: "paragraph",
        text: "When you delete your account, we will delete or anonymize your personal information within a reasonable period, except where retention is required by law or permitted for legitimate business purposes such as backup, security, or fraud prevention.",
      },
    ],
  },
  {
    title: "6. Security",
    blocks: [
      {
        type: "paragraph",
        text: "We implement administrative, technical, and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, or destruction. These measures may include encrypted communications, access controls, and secure authentication practices.",
      },
      {
        type: "paragraph",
        text: "No method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "7. Your Rights and Choices",
    blocks: [
      {
        type: "paragraph",
        text: "Depending on your location and applicable law, you may have rights regarding your personal information, which may include the right to:",
      },
      {
        type: "list",
        items: [
          "Access and receive a copy of personal information we hold about you.",
          "Correct or update inaccurate or incomplete information.",
          "Delete your account and associated personal information.",
          "Withdraw consent where processing is based on consent, subject to legal or contractual restrictions.",
          "Object to or restrict certain processing, where applicable.",
        ],
      },
      {
        type: "paragraph",
        text: "You can update much of your profile information within the App. To request account deletion or exercise other privacy rights, contact us using the details in the Contact Us section below.",
      },
      {
        type: "paragraph",
        text: "You may also manage certain permissions—such as location access—through your device settings.",
      },
    ],
  },
  {
    title: "8. Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "The Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13 without appropriate authorization, we will take steps to delete that information.",
      },
      {
        type: "paragraph",
        text: "If you are under the age required to form a binding contract in your jurisdiction, you may use the Services only with the permission and supervision of a parent or legal guardian.",
      },
    ],
  },
  {
    title: "9. International Users",
    blocks: [
      {
        type: "paragraph",
        text: "INAZU is operated from India. If you access the Services from outside India, you understand that your information may be processed and stored in India or other locations where we or our service providers operate, which may have different data protection laws than your country of residence.",
      },
    ],
  },
  {
    title: "10. Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: 'We may update this Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. If we make material changes, we may provide additional notice through the App, website, or other appropriate means. Your continued use of the Services after an updated Policy becomes effective constitutes your acknowledgment of the revised Policy.',
      },
    ],
  },
  {
    title: "11. Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions, concerns, or requests regarding this Policy or our privacy practices, contact us at:",
      },
      { type: "email", address: "support@inazu.app" },
    ],
  },
];
