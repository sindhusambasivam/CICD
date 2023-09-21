import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch'; // Import node-fetch

const octokit = new Octokit({
  auth: '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',
  request: { fetch } // Pass fetch as the request implementation
});

const owner = 'SS2199';
const repo = 'Action';

async function getWorkflows() {
  try {
    const response = await octokit.actions.listRepoWorkflows({
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    console.log('Workflows:', response.data);
  } catch (error) {
    console.error('Error getting workflows:', error);
  }
}

getWorkflows();
