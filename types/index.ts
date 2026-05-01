// Core type definitions for Aethrix OS Agent System

export interface AgentTask {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  priority: 'low' | 'medium' | 'high';
  assignedAgent: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  result?: Record<string, unknown>;
  error?: string;
}

export interface Agent {
  id: string;
  name: string;
  type: 'research' | 'code' | 'planning' | 'execution' | 'review' | 'deployment' | 'monitoring' | 'optimization' | 'documentation';
  description: string;
  capabilities: string[];
  status: 'idle' | 'working' | 'paused';
  currentTask?: string;
  successRate: number;
  totalTasksCompleted: number;
}

export interface AgentMessage {
  id: string;
  agentId: string;
  content: string;
  type: 'thinking' | 'action' | 'result' | 'error';
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface AgentWorkflow {
  id: string;
  name: string;
  description: string;
  agents: string[];
  steps: WorkflowStep[];
  status: 'draft' | 'active' | 'completed' | 'failed';
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
}

export interface WorkflowStep {
  id: string;
  name: string;
  agentId: string;
  action: string;
  inputs: Record<string, unknown>;
  outputs?: Record<string, unknown>;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  order: number;
  dependencies: string[];
}

export interface ProjectState {
  id: string;
  title: string;
  description: string;
  userPrompt: string;
  status: 'ideation' | 'planning' | 'development' | 'testing' | 'deployment' | 'live';
  agents: Agent[];
  tasks: AgentTask[];
  workflows: AgentWorkflow[];
  codeGenerated: boolean;
  deploymentUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CodeBlock {
  id: string;
  filename: string;
  language: string;
  content: string;
  purpose: string;
  dependencies: string[];
}

export interface DeploymentConfig {
  platform: 'vercel' | 'netlify' | 'aws' | 'gcp' | 'azure';
  environment: 'development' | 'staging' | 'production';
  envVars: Record<string, string>;
  buildCommand: string;
  startCommand: string;
}