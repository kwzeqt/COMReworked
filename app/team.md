---
layout: page
footer: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/1904564624176934912/hbxl_V-W_400x400.jpg',
    name: 'Cyrus Rebello',
    title: 'Founder & Animation Director',
    links: [
      { icon: 'discord' },
      { icon: 'x', link: 'https://x.com/cyrus_rebello' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The team behind COM Studio.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
