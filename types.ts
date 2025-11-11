export interface Factuality {
  score: number; // 0-100
  explanation: string;
}

export interface Bias {
  score: number; // -1 to 1
  summary: string;
}

export enum AuthorshipClassification {
  AI = "Likely AI-generated",
  HUMAN = "Likely human-written",
  UNCLEAR = "Unclear",
}

export interface Authorship {
  classification: AuthorshipClassification;
}

export interface Summary {
  text: string;
  topics: string[];
  sentiment: number; // -1 to 1
}

export interface GroundingSource {
    uri: string;
    title: string;
    credibility: 'High' | 'Medium' | 'Low' | 'Unknown';
}

export interface AnalysisResult {
  factuality: Factuality;
  bias: Bias;
  authorship: Authorship;
  summary: Summary;
  sources: GroundingSource[];
}