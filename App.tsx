
import * as React from 'react';
import type { FormEvent } from 'react';
import CoralBranchDisplay from './components/CoralBranchDisplay';
import PhotoManagerModal from './components/PhotoManagerModal';
import AddEditItemsPage from './components/AddEditItemsPage';
import SideMenu from './components/SideMenu';
import { CloseIcon, HamburgerIcon } from './components/Icons';
import RulesPage from './components/RulesPage';
import HealthReportsPage from './components/HealthReportsPage';
import GrowthReportsPage from './components/GrowthReportsPage';
import BackupRestorePage from './components/BackupRestorePage';
import ReportsPage from './components/ReportsPage';
import SpeciesIdPage from './components/SpeciesIdPage';
import ArchivePage from './components/ArchivePage';
import NotesToDoPage from './components/NotesToDoPage';
import MonitoringPage from './components/MonitoringPage';
import TreesPage from './components/TreesPage';
import ModelComparisonPage from './components/ModelComparisonPage';
import SitesPage from './components/SitesPage';
import AnchorsPage from './components/3dModelsPage';
import CollectionZonesPage from './components/CollectionZonesPage';
import BranchesPage from './components/BranchesPage';
import EnvironmentalPage from './components/EnvironmentalPage';
import DashboardPage from './components/DashboardPage';
import ExperimentsPage from './components/ExperimentsPage';
import TreeShadeExperimentPage from './components/TreeShadeExperimentPage';
import LongTermStudyPage from './components/LongTermStudyPage';
import TrendsPage from './components/TrendsPage';
import FloatManagementPage from './components/FloatManagementPage';
import { CoralBranch, Photo, HealthReport, GrowthReport, Site, CollectionZone, Anchor, Tree, Float, Rule, Species, ActivityLogItem, ToDoItem, VoiceNote, Page, AddEditSection, Reminder, BleachingLevel, TreeShadeExperiment, ExperimentReport, LongTermStudy, ObservationReport, TemperatureLogger, MaintenanceLog, ScheduleItem, LogType, ReminderStatus } from './types';


// MOCK DATA
const initialBranchesData: CoralBranch[] = [
  {
    id: 'branch-001',
    fragmentId: 'M1-A-CERVICORNIS',
    genus: 'Acropora',
    species: 'cervicornis',
    dateAdded: '2022-01-10T10:00:00Z',
    anchor: 'Anchor A',
    tree: 12,
    face: 3,
    position: 7,
    collectionZone: 'Zone 5 - North Reef',
    site: 'Moore Reef',
    photos: [
      { id: 'p1', url: 'https://picsum.photos/id/102/800/600', isMain: true },
      { id: 'p2', url: 'https://picsum.photos/id/103/800/600', isMain: false },
      { id: 'p3', url: 'https://picsum.photos/id/104/800/600', isMain: false },
      { id: 'p4', url: 'https://picsum.photos/id/106/800/600', isMain: false },
    ],
    healthReports: [
      { id: 'h1', date: '2024-05-15T10:00:00Z', healthPercentage: 100, notes: 'Full recovery, excellent coloration.', bleaching: 'None' },
      { id: 'h2', date: '2024-04-10T10:00:00Z', healthPercentage: 75, notes: 'Minor paling has subsided, recovery underway.', bleaching: 'Mild' },
      { id: 'h3', date: '2024-03-20T10:00:00Z', healthPercentage: 50, notes: 'Signs of bleaching observed due to elevated temperatures.', bleaching: 'Medium' },
      { id: 'h-23-12', date: '2023-12-15T10:00:00Z', healthPercentage: 60, notes: 'Noticeable paling on tips.', bleaching: 'Medium' },
      { id: 'h-23-09', date: '2023-09-15T10:00:00Z', healthPercentage: 75, notes: 'Stable, some algae present.', bleaching: 'Mild' },
      { id: 'h-23-06', date: '2023-06-15T10:00:00Z', healthPercentage: 75, notes: 'Good condition.', bleaching: 'None' },
      { id: 'h-23-03', date: '2023-03-15T10:00:00Z', healthPercentage: 85, notes: 'Showing resilience after a minor stress event.', bleaching: 'Mild' },
      { id: 'h-22-12', date: '2022-12-15T10:00:00Z', healthPercentage: 90, notes: 'Slight paling, monitoring.', bleaching: 'Mild' },
      { id: 'h-22-09', date: '2022-09-15T10:00:00Z', healthPercentage: 100, notes: 'Excellent health.', bleaching: 'None' },
      { id: 'h-22-06', date: '2022-06-15T10:00:00Z', healthPercentage: 100, notes: 'Vibrant and healthy.', bleaching: 'None' },
      { id: 'h-22-03', date: '2022-03-15T10:00:00Z', healthPercentage: 95, notes: 'Acclimatizing well.', bleaching: 'None' },
    ],
    growthReports: [
      { id: 'g1', date: '2024-05-15T10:00:00Z', surfaceAreaM2: 0.015, volumeM3: 0.00012 },
      { id: 'g2', date: '2024-02-15T10:00:00Z', surfaceAreaM2: 0.011, volumeM3: 0.00009 },
      { id: 'g-23-09', date: '2023-09-15T10:00:00Z', surfaceAreaM2: 0.008, volumeM3: 0.00007 },
      { id: 'g-23-03', date: '2023-03-15T10:00:00Z', surfaceAreaM2: 0.006, volumeM3: 0.00005 },
      { id: 'g-22-09', date: '2022-09-15T10:00:00Z', surfaceAreaM2: 0.004, volumeM3: 0.00003 },
      { id: 'g-22-03', date: '2022-03-15T10:00:00Z', surfaceAreaM2: 0.002, volumeM3: 0.00001 },
    ],
    isHeatTolerant: true,
    isArchived: false,
  },
  {
    id: 'branch-002',
    fragmentId: 'M2-A-PALMATA',
    genus: 'Acropora',
    species: 'palmata',
    dateAdded: '2021-11-20T10:00:00Z',
    anchor: 'Anchor A',
    tree: 12,
    face: 3,
    position: 8,
    collectionZone: 'Zone 5 - North Reef',
    site: 'Moore Reef',
    photos: [{ id: 'p5', url: 'https://picsum.photos/id/107/800/600', isMain: true }],
    healthReports: [
        { id: 'h7', date: '2024-05-15T10:00:00Z', healthPercentage: 25, notes: 'Heavy algae growth.', bleaching: 'None' },
        { id: 'h-24-02', date: '2024-02-10T10:00:00Z', healthPercentage: 50, notes: 'Algae becoming an issue.', bleaching: 'None' },
        { id: 'h-23-11', date: '2023-11-10T10:00:00Z', healthPercentage: 75, notes: 'Some competition from algae.', bleaching: 'None' },
        { id: 'h-23-08', date: '2023-08-10T10:00:00Z', healthPercentage: 100, notes: 'Looking good.', bleaching: 'None' },
        { id: 'h-23-05', date: '2023-05-10T10:00:00Z', healthPercentage: 100, notes: 'Excellent condition.', bleaching: 'None' },
        { id: 'h-23-02', date: '2023-02-10T10:00:00Z', healthPercentage: 95, notes: 'Stable.', bleaching: 'None' },
        { id: 'h-22-11', date: '2022-11-15T10:00:00Z', healthPercentage: 90, notes: 'Slight paling observed.', bleaching: 'Mild' },
        { id: 'h-22-08', date: '2022-08-15T10:00:00Z', healthPercentage: 100, notes: 'Healthy growth.', bleaching: 'None' },
        { id: 'h-22-05', date: '2022-05-15T10:00:00Z', healthPercentage: 100, notes: 'Vibrant.', bleaching: 'None' },
        { id: 'h-22-02', date: '2022-02-15T10:00:00Z', healthPercentage: 95, notes: 'Acclimatizing well post-addition.', bleaching: 'None' },
    ],
    growthReports: [
        { id: 'g4', date: '2024-05-15T10:00:00Z', surfaceAreaM2: 0.02, volumeM3: 0.00015 },
        { id: 'g-23-11', date: '2023-11-15T10:00:00Z', surfaceAreaM2: 0.018, volumeM3: 0.00013 },
        { id: 'g-23-05', date: '2023-05-15T10:00:00Z', surfaceAreaM2: 0.015, volumeM3: 0.00011 },
        { id: 'g-22-11', date: '2022-11-15T10:00:00Z', surfaceAreaM2: 0.010, volumeM3: 0.00008 },
        { id: 'g-22-05', date: '2022-05-15T10:00:00Z', surfaceAreaM2: 0.005, volumeM3: 0.00004 },
    ],
    isHeatTolerant: false,
    isArchived: false,
  },
  {
    id: 'branch-003',
    fragmentId: 'M3-P-ASTREOIDES',
    genus: 'Porites',
    species: 'astreoides',
    dateAdded: '2024-01-20T10:00:00Z',
    anchor: 'Anchor A',
    tree: 12,
    face: 1,
    position: 2,
    collectionZone: 'Zone 5 - North Reef',
    site: 'Moore Reef',
    photos: [{ id: 'p6', url: 'https://picsum.photos/id/108/800/600', isMain: true }],
    healthReports: [
        { id: 'h8', date: '2024-05-10T10:00:00Z', healthPercentage: 100, notes: 'Stable.', bleaching: 'None' },
        { id: 'h-24-02-b3', date: '2024-02-20T10:00:00Z', healthPercentage: 95, notes: 'Initial placement check.', bleaching: 'None' },
    ],
    growthReports: [
        { id: 'g5', date: '2024-05-10T10:00:00Z', surfaceAreaM2: 0.005, volumeM3: 0.00004 },
        { id: 'g-24-02-b3', date: '2024-02-20T10:00:00Z', surfaceAreaM2: 0.004, volumeM3: 0.00003 },
    ],
    isHeatTolerant: false,
    isArchived: false,
  },
  {
    id: 'branch-004',
    fragmentId: 'H4-O-FAVEOLATA',
    genus: 'Orbicella',
    species: 'faveolata',
    dateAdded: '2022-03-05T10:00:00Z',
    anchor: 'Anchor A',
    tree: 8,
    face: 1,
    position: 1,
    collectionZone: 'Zone 2 - West Reef',
    site: 'Hastings Reef',
    photos: [{ id: 'p7', url: 'https://picsum.photos/id/110/800/600', isMain: true }],
    healthReports: [
        { id: 'h9', date: '2024-05-18T10:00:00Z', healthPercentage: 0, notes: 'Removed, confirmed dead.', bleaching: 'Strong' },
        { id: 'h-24-04-b4', date: '2024-04-18T10:00:00Z', healthPercentage: 25, notes: 'Rapid tissue necrosis observed.', bleaching: 'Strong' },
        { id: 'h-24-01-b4', date: '2024-01-15T10:00:00Z', healthPercentage: 75, notes: 'Showing signs of stress.', bleaching: 'Mild' },
        { id: 'h-23-10-b4', date: '2023-10-15T10:00:00Z', healthPercentage: 100, notes: 'Healthy.', bleaching: 'None' },
    ],
    growthReports: [
        { id: 'g6', date: '2024-05-18T10:00:00Z', surfaceAreaM2: 0.08, volumeM3: 0.0009 },
        { id: 'g-23-10-b4', date: '2023-10-15T10:00:00Z', surfaceAreaM2: 0.07, volumeM3: 0.0008 },
    ],
    isHeatTolerant: true,
    isArchived: false,
  }
];


const initialSpeciesList: Species[] = [
  {
    id: 'sp-acropora-cervicornis',
    genus: 'Acropora',
    species: 'cervicornis',
    photos: [
        { id: 'sp1', url: 'https://picsum.photos/id/201/800/600', isMain: true },
        { id: 'sp2', url: 'https://picsum.photos/id/202/800/600', isMain: false },
    ],
    notes: 'Key identifying features include thin, branching structures with prominent axial corallites. Coloration can vary from pale tan to brown, depending on light exposure and water conditions. Highly susceptible to white-band disease.',
    externalLink: 'https://www.coralsoftheworld.org/species/acropora/acropora-cervicornis/'
  },
  {
    id: 'sp-acropora-palmata',
    genus: 'Acropora',
    species: 'palmata',
    photos: [{ id: 'sp3', url: 'https://picsum.photos/id/203/800/600', isMain: true }],
    notes: 'Commonly known as elkhorn coral, it exhibits large, flattened branches resembling elk antlers. A crucial reef-building coral in the Caribbean.',
    externalLink: 'https://www.coralsoftheworld.org/species/acropora/acropora-palmata/'
  },
];

const mockSites: Site[] = [
  { id: 's1', name: 'Moore Reef', photoUrl: 'https://picsum.photos/id/119/800/600', isArchived: false },
  { id: 's2', name: 'Hastings Reef', photoUrl: 'https://picsum.photos/id/124/800/600', isArchived: false }
];
const mockZones: CollectionZone[] = [
    { id: 'z1', name: 'Zone 5 - North Reef', siteId: 's1', latitude: 25.7630, longitude: -80.1900, isArchived: false },
    { id: 'z2', name: 'Zone 2 - West Reef', siteId: 's2', latitude: 25.7610, longitude: -80.1940, isArchived: false }
];
const mockAnchors: Anchor[] = [
    { id: 'a1', name: 'Anchor A', siteId: 's1', latitude: 25.7617, longitude: -80.1918, isDeepwater: true, depth: 25, isArchived: false },
    { id: 'a2', name: 'Anchor B', siteId: 's2', latitude: 25.7617, longitude: -80.1918, isDeepwater: false, isArchived: false }
];
const mockTrees: Tree[] = [
    { id: 't1', number: 12, anchorId: 'a1', currentDepth: 14, normalDepth: 8, lastMovedDate: '2024-05-01T10:00:00Z', isArchived: false },
    { id: 't2', number: 8, anchorId: 'a2', currentDepth: 8, normalDepth: 8, isArchived: false },
    { id: 't3', number: 15, anchorId: 'a1', currentDepth: 20, normalDepth: 10, lastMovedDate: '2024-05-10T10:00:00Z', isArchived: false }
];
const mockFloats: Float[] = [
  { id: 'f1', name: 'Float 1', treeId: 't1' },
  { id: 'f2', name: 'Float 1', treeId: 't2' },
  { id: 'f3', name: 'Float 1', treeId: 't3' },
];
const mockRules: Rule[] = [
  { id: 'r1', target: 'Branch', intervalMonths: 1, checkType: 'Health Report' },
  { id: 'r2', target: 'Branch', intervalMonths: 3, checkType: 'Scan' },
  { id: 'r3', target: 'Tree', intervalMonths: 6, checkType: 'Check' },
];

type LongTermStudyName = 'ropeOnRubble' | 'squareRopeFrame' | 'cubeRopeFrame';
type ArchiveableItemType = 'Site' | 'Collection Zone' | 'Anchor' | 'Tree' | 'Branch';
type SyncStatus = 'idle' | 'saving' | 'saved' | 'error' | 'loading';

interface EditBranchModalProps {
  branch: CoralBranch;
  onUpdate: (updatedBranch: CoralBranch) => void;
  onClose: () => void;
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

const EditBranchModal: React.FC<EditBranchModalProps> = ({ branch, onUpdate, onClose }) => {
    const [genus, setGenus] = React.useState(branch.genus);
    const [species, setSpecies] = React.useState(branch.species);
    const [isHeatTolerant, setIsHeatTolerant] = React.useState(branch.isHeatTolerant || false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const updatedBranch: CoralBranch = {
            ...branch,
            genus: genus.trim(),
            species: species.trim(),
            isHeatTolerant,
        };
        onUpdate(updatedBranch);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
                <form onSubmit={handleSubmit}>
                    <header className="p-4 border-b flex justify-between items-center">
                      <h2 className="text-xl font-bold text-deep-sea">Edit Branch: {branch.fragmentId}</h2>
                      <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon className="w-6 h-6"/>
                      </button>
                    </header>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="genus" className="block text-sm font-medium text-gray-700">Genus</label>
                            <input type="text" id="genus" value={genus} onChange={e => setGenus(e.target.value)} required placeholder="e.g., Acropora" className="mt-1 block w-full rounded-md border border-ocean-blue shadow-sm p-2 bg-white text-gray-900 focus:ring-ocean-blue focus:border-ocean-blue"/>
                        </div>
                        <div>
                            <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species</label>
                            <input type="text" id="species" value={species} onChange={e => setSpecies(e.target.value)} required placeholder="e.g., palmata" className="mt-1 block w-full rounded-md border border-ocean-blue shadow-sm p-2 bg-white text-gray-900 focus:ring-ocean-blue focus:border-ocean-blue"/>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                            <input type="checkbox" id="isHeatTolerantEdit" checked={isHeatTolerant} onChange={e => setIsHeatTolerant(e.target.checked)} className="h-4 w-4 rounded border border-ocean-blue text-ocean-blue focus:ring-ocean-blue"/>
                            <label htmlFor="isHeatTolerantEdit" className="font-medium text-gray-700">Known heat tolerant colony</label>
                        </div>
                    </div>
                    <footer className="p-4 bg-gray-50 rounded-b-2xl flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Cancel</button>
                        <button type="submit" className="bg-ocean-blue hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg">Save Changes</button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

const SyncStatusIndicator: React.FC<{ status: SyncStatus }> = ({ status }) => {
  const messages = {
    idle: null,
    loading: '💾 Loading...',
    saving: '💾 Saving...',
    saved: '💾 Saved locally',
    error: '❌ Save Error',
  };
  
  if (!messages[status]) return null;

  return <div className="text-sm text-gray-600 font-medium">{messages[status]}</div>;
};


const App: React.FC = () => {
  // --- Cloud Sync State ---
  const [syncStatus, setSyncStatus] = React.useState<SyncStatus>('idle');
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const dataInitialized = React.useRef(false);
  const STORAGE_KEY = 'coral-nursery-data';

  // --- PERSISTENT SPECIES INFO STATE ---
  const [speciesList, setSpeciesList] = React.useState<Species[]>([]);
  
  // --- ROBUST APP DATA STATE & LOADING ---
  const [coralBranches, setCoralBranches] = React.useState<CoralBranch[]>([]);
  const [activeBranchId, setActiveBranchId] = React.useState<string>('');
  const [rules, setRules] = React.useState<Rule[]>([]);
  const [isBranchModalOpen, setIsBranchModalOpen] = React.useState(false);
  const [isSpeciesModalOpen, setIsSpeciesModalOpen] = React.useState(false);
  const [editingBranch, setEditingBranch] = React.useState<CoralBranch | null>(null);
  const [editingSpeciesId, setEditingSpeciesId] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<Page>('dashboard');
  const [pageData, setPageData] = React.useState<any>(null);
  const [initialSection, setInitialSection] = React.useState<AddEditSection>('Sites');
  const [activityLog, setActivityLog] = React.useState<ActivityLogItem[]>([]);
  const [sites, setSites] = React.useState<Site[]>([]);
  const [zones, setZones] = React.useState<CollectionZone[]>([]);
  const [anchors, setAnchors] = React.useState<Anchor[]>([]);
  const [trees, setTrees] = React.useState<Tree[]>([]);
  const [floats, setFloats] = React.useState<Float[]>([]);
  const [tempLoggers, setTempLoggers] = React.useState<TemperatureLogger[]>([]);
  const [maintenanceLogs, setMaintenanceLogs] = React.useState<MaintenanceLog[]>([]);
  const [toDoItems, setToDoItems] = React.useState<ToDoItem[]>([]);
  const [voiceNotes, setVoiceNotes] = React.useState<VoiceNote[]>([]);
  const [schedule, setSchedule] = React.useState<Map<string, ScheduleItem[]>>(new Map());
  const [treeShadeExperiment, setTreeShadeExperiment] = React.useState<TreeShadeExperiment | null>(null);
  const [ropeOnRubbleExperiment, setRopeOnRubbleExperiment] = React.useState<LongTermStudy | null>(null);
  const [squareRopeFrameExperiment, setSquareRopeFrameExperiment] = React.useState<LongTermStudy | null>(null);
  const [cubeRopeFrameExperiment, setCubeRopeFrameExperiment] = React.useState<LongTermStudy | null>(null);

  const clearAllData = React.useCallback(() => {
      setCoralBranches([]);
      setActiveBranchId('');
      // Rules are preserved (not clearing setRules)
      setSites([]);
      setZones([]);
      setAnchors([]);
      setTrees([]);
      setFloats([]);
      setActivityLog([]);
      setTempLoggers([]);
      setMaintenanceLogs([]);
      setToDoItems([]);
      setVoiceNotes([]);
      setSchedule(new Map());
      setTreeShadeExperiment(null);
      setRopeOnRubbleExperiment(null);
      setSquareRopeFrameExperiment(null);
      setCubeRopeFrameExperiment(null);
      // Species list is preserved (not clearing setSpeciesList)
  }, []);

  const loadAllDataFromBackup = (data: any) => {
      if (data.coralBranches) setCoralBranches(data.coralBranches);
      if (data.coralBranches?.[0]?.id) setActiveBranchId(data.coralBranches[0].id);
      if (data.rules) setRules(data.rules);
      if (data.sites) setSites(data.sites);
      if (data.zones) setZones(data.zones);
      if (data.anchors) setAnchors(data.anchors);
      if (data.trees) setTrees(data.trees);
      if (data.floats) setFloats(data.floats);
      if (data.activityLog) setActivityLog(data.activityLog);
      if (data.tempLoggers) setTempLoggers(data.tempLoggers);
      if (data.maintenanceLogs) setMaintenanceLogs(data.maintenanceLogs);
      if (data.toDoItems) setToDoItems(data.toDoItems);
      if (data.voiceNotes) setVoiceNotes(data.voiceNotes);
      // Schedule is ephemeral
      setSchedule(new Map());
      if (data.treeShadeExperiment) setTreeShadeExperiment(data.treeShadeExperiment);
      if (data.ropeOnRubbleExperiment) setRopeOnRubbleExperiment(data.ropeOnRubbleExperiment);
      if (data.squareRopeFrameExperiment) setSquareRopeFrameExperiment(data.squareRopeFrameExperiment);
      if (data.cubeRopeFrameExperiment) setCubeRopeFrameExperiment(data.cubeRopeFrameExperiment);
      if (data.speciesList) setSpeciesList(data.speciesList);
  };


  const loadSampleData = React.useCallback(() => {
      setCoralBranches(initialBranchesData);
      setActiveBranchId('branch-001');
      setRules(mockRules);
      setSites(mockSites);
      setZones(mockZones);
      setAnchors(mockAnchors);
      setTrees(mockTrees);
      setFloats(mockFloats);
      setTempLoggers([]);
      setMaintenanceLogs([]);
      setToDoItems([]);
      setVoiceNotes([]);
      setSchedule(new Map());
      setTreeShadeExperiment(null);
      setRopeOnRubbleExperiment(null);
      setSquareRopeFrameExperiment(null);
      setCubeRopeFrameExperiment(null);
      setSpeciesList(initialSpeciesList);
      
      const initialLogs: ActivityLogItem[] = [];
      mockTrees.forEach((tree) => {
          const anchor = mockAnchors.find(a => a.id === tree.anchorId);
          if (anchor) initialLogs.push({ id: `log-init-tree-${tree.id}`, timestamp: tree.lastMovedDate || new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(), message: `Initial placement: Tree #${tree.number} [${tree.id}] was added to Anchor "${anchor.name}".`, type: 'movement' });
      });
      initialBranchesData.forEach((branch) => {
          initialLogs.push({ id: `log-init-branch-${branch.id}`, timestamp: branch.dateAdded, message: `Initial placement: Branch ${branch.fragmentId} [${branch.id}] was added to Tree #${branch.tree}, Face ${branch.face}, Position ${branch.position}.`, type: 'movement' });
      });
      initialLogs.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setActivityLog(initialLogs);
  }, []);

  // --- CLOUD SYNC LOGIC REPLACED WITH LOCALSTORAGE ---

  const allData = React.useMemo(() => ({
    coralBranches, rules, speciesList, sites, zones, anchors, trees, floats, activityLog, tempLoggers, maintenanceLogs, toDoItems, voiceNotes,
    treeShadeExperiment, ropeOnRubbleExperiment, squareRopeFrameExperiment, cubeRopeFrameExperiment
  }), [coralBranches, rules, speciesList, sites, zones, anchors, trees, floats, activityLog, tempLoggers, maintenanceLogs, toDoItems, voiceNotes, treeShadeExperiment, ropeOnRubbleExperiment, squareRopeFrameExperiment, cubeRopeFrameExperiment]);

  // Initial data load effect: Always try to load from localStorage.
  React.useEffect(() => {
    const loadInitialData = async () => {
      setIsInitialLoading(true);
      setSyncStatus('loading');
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
          const data = JSON.parse(storedData);
          loadAllDataFromBackup(data);
          setSyncStatus('saved');
        } else {
          loadSampleData(); // Storage is empty, seed with sample data
        }
      } catch (error) {
        console.error("Initial local load failed, loading sample data as fallback:", error);
        setSyncStatus('error');
        loadSampleData(); // Fallback to sample data on error
      } finally {
        setIsInitialLoading(false);
        dataInitialized.current = true;
      }
    };
    loadInitialData();
  }, []);

  // Auto-save effect
  React.useEffect(() => {
    if (!dataInitialized.current) {
        return;
    }

    setSyncStatus('saving');
    const handler = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
        setSyncStatus('saved');
      } catch (error) {
        console.error("Local save failed:", error);
        setSyncStatus('error');
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [allData]);


  // Memoized lists for active vs archived items
  const activeBranches = React.useMemo(() => coralBranches.filter(b => !b.isArchived), [coralBranches]);
  const archivedBranches = React.useMemo(() => coralBranches.filter(b => b.isArchived), [coralBranches]);
  const activeSites = React.useMemo(() => sites.filter(s => !s.isArchived), [sites]);
  const archivedSites = React.useMemo(() => sites.filter(s => s.isArchived), [sites]);
  const activeZones = React.useMemo(() => zones.filter(z => !z.isArchived), [zones]);
  const archivedZones = React.useMemo(() => zones.filter(z => z.isArchived), [zones]);
  const activeAnchors = React.useMemo(() => anchors.filter(a => !a.isArchived), [anchors]);
  const archivedAnchors = React.useMemo(() => anchors.filter(a => a.isArchived), [anchors]);
  const activeTrees = React.useMemo(() => trees.filter(t => !t.isArchived), [trees]);
  const archivedTrees = React.useMemo(() => trees.filter(t => t.isArchived), [trees]);

  const reminders = React.useMemo((): Reminder[] => {
    const generatedReminders: Reminder[] = [];
    const now = new Date();
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(now.getDate() + 14);

    const branchRules = rules.filter(r => r.target === 'Branch');
    if (branchRules.length === 0) return [];

    activeBranches.forEach(branch => {
        branchRules.forEach(rule => {
            let lastCheckDate: Date | null = null;

            if (rule.checkType === 'Health Report') {
                if (branch.healthReports.length > 0) {
                    lastCheckDate = new Date(Math.max(...branch.healthReports.map(r => new Date(r.date).getTime())));
                }
            } else if (rule.checkType === 'Scan') { // Assuming 'Scan' relates to growth reports
                if (branch.growthReports.length > 0) {
                    lastCheckDate = new Date(Math.max(...branch.growthReports.map(r => new Date(r.date).getTime())));
                }
            }
            
            // If no specific reports exist for this check type, use the date the branch was added as the baseline
            if (!lastCheckDate) {
                lastCheckDate = new Date(branch.dateAdded);
            }

            const dueDate = new Date(lastCheckDate);
            dueDate.setMonth(dueDate.getMonth() + rule.intervalMonths);

            let status: ReminderStatus | null = null;
            if (dueDate < now) {
                status = 'overdue';
            } else if (dueDate <= twoWeeksFromNow) {
                status = 'due';
            }

            if (status) {
                generatedReminders.push({
                    branchId: branch.id,
                    branchFragmentId: branch.fragmentId,
                    site: branch.site,
                    tree: branch.tree,
                    face: branch.face,
                    position: branch.position,
                    message: `A "${rule.checkType}" is required.`,
                    dueDate: dueDate.toISOString(),
                    status: status,
                });
            }
        });
    });

    return generatedReminders;
  }, [rules, activeBranches]);
  
  const activeBranch = coralBranches.find(b => b.id === activeBranchId) || activeBranches[0];

  // --- REGULAR APP HANDLERS ---
  const logActivity = (message: string, type: LogType) => {
    const newLogItem: ActivityLogItem = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString(),
      message,
      type,
    };
    setActivityLog(prev => [newLogItem, ...prev]);
  };

  const updateBranchById = (branchId: string, updater: (branch: CoralBranch) => CoralBranch) => {
      setCoralBranches(prev => prev.map(b => b.id === branchId ? updater(b) : b));
  };

  const handleBranchAddPhotos = async (files: File[]) => {
    const newPhotosPromises = files.map(async (file) => {
      const url = await fileToBase64(file);
      return {
        id: `new-${Date.now()}-${Math.random()}`,
        url,
        isMain: false,
      };
    });
    const newPhotos = await Promise.all(newPhotosPromises);
    updateBranchById(activeBranch.id, branch => ({ ...branch, photos: [...newPhotos, ...branch.photos] }));
    logActivity(`Added ${files.length} photo(s) to branch ${activeBranch.fragmentId}.`, 'general');
  };

  const handleBranchDeletePhotos = (photoIds: string[]) => {
    updateBranchById(activeBranch.id, branch => {
        const remainingPhotos = branch.photos.filter(p => !photoIds.includes(p.id));
        const mainPhoto = branch.photos.find(p => p.isMain);
        const mainPhotoWasDeleted = mainPhoto ? photoIds.includes(mainPhoto.id) : true;

        if (remainingPhotos.length === 0) {
            return { ...branch, photos: [] };
        }

        if (mainPhotoWasDeleted) {
            remainingPhotos[0].isMain = true;
        }
        return { ...branch, photos: remainingPhotos };
    });
    logActivity(`Deleted ${photoIds.length} photo(s) from branch ${activeBranch.fragmentId}.`, 'general');
  };

  const handleBranchSetMainPhoto = (photoId: string) => {
    updateBranchById(activeBranch.id, branch => ({
      ...branch,
      photos: branch.photos.map(p => ({ ...p, isMain: p.id === photoId })),
    }));
    logActivity(`Set new main photo for branch ${activeBranch.fragmentId}.`, 'general');
  };
  
  const handleSpeciesAddPhotos = async (files: File[]) => {
    if (!editingSpeciesId) return;
    const newPhotosPromises = files.map(async (file) => {
      const url = await fileToBase64(file);
      return {
        id: `new-species-${Date.now()}-${Math.random()}`,
        url,
        isMain: false,
      };
    });
    const newPhotos = await Promise.all(newPhotosPromises);

    setSpeciesList(prev => prev.map(s => {
      if (s.id === editingSpeciesId) {
        const updatedPhotos = [...newPhotos, ...s.photos];
        if (updatedPhotos.length > 0 && !updatedPhotos.some(p => p.isMain)) {
          updatedPhotos[0].isMain = true;
        }
        return { ...s, photos: updatedPhotos };
      }
      return s;
    }));
    logActivity(`Added ${files.length} photo(s) to Species ID for ${editingSpeciesId}.`, 'general');
  };

  const handleSpeciesDeletePhotos = (photoIds: string[]) => {
    if (!editingSpeciesId) return;
    setSpeciesList(prev => prev.map(s => {
      if (s.id === editingSpeciesId) {
        const remainingPhotos = s.photos.filter(p => !photoIds.includes(p.id));
        if (remainingPhotos.length > 0 && !remainingPhotos.some(p => p.isMain)) {
          remainingPhotos[0].isMain = true;
        }
        return { ...s, photos: remainingPhotos };
      }
      return s;
    }));
    logActivity(`Deleted ${photoIds.length} photo(s) from Species ID for ${editingSpeciesId}.`, 'general');
  };

  const handleSpeciesSetMainPhoto = (photoId: string) => {
    if (!editingSpeciesId) return;
    setSpeciesList(prev => prev.map(s => {
      if (s.id === editingSpeciesId) {
        return { ...s, photos: s.photos.map(p => ({ ...p, isMain: p.id === photoId })) };
      }
      return s;
    }));
    logActivity(`Set new main photo for Species ID for ${editingSpeciesId}.`, 'general');
  };

  const handleAddSpecies = (genus: string, species: string) => {
    const newSpecies: Species = {
      id: `sp-${genus.toLowerCase()}-${species.toLowerCase()}-${Date.now()}`,
      genus,
      species,
      photos: [],
      notes: '',
      externalLink: ''
    };
    setSpeciesList(prev => [...prev, newSpecies]);
    logActivity(`Added new species: ${genus} ${species}`, 'general');
  };

  const handleUpdateSpecies = (updatedSpecies: Species) => {
    setSpeciesList(prev => prev.map(s => s.id === updatedSpecies.id ? updatedSpecies : s));
    logActivity(`Updated details for species ${updatedSpecies.genus} ${updatedSpecies.species}`, 'general');
  };
  
  const handleAddTree = (anchorId: string) => {
    const maxTreeNumber = Math.max(0, ...trees.map(t => t.number));
    const newTreeNumber = maxTreeNumber + 1;
    const newTreeId = `t-${Date.now()}`;
    const newTree: Tree = {
      id: newTreeId,
      number: newTreeNumber,
      anchorId: anchorId,
      currentDepth: 8,
      normalDepth: 8,
      isArchived: false,
    };
    
    const newFloat: Float = {
      id: `f-${Date.now()}`,
      name: `Float 1`,
      treeId: newTreeId,
    };

    const anchor = anchors.find(a => a.id === anchorId);
    if (!anchor) {
        alert("Could not find the selected anchor.");
        return;
    }

    setTrees(prev => [...prev, newTree]);
    setFloats(prev => [...prev, newFloat]);
    logActivity(`Initial placement: Tree #${newTreeNumber} [${newTree.id}] was added to Anchor "${anchor.name}".`, 'movement');
    alert(`Tree #${newTreeNumber} has been added.`);
  };
  
  const handleAddFloat = (treeId: string) => {
    const existingFloats = floats.filter(f => f.treeId === treeId);
    const newFloatNumber = existingFloats.length + 1;
    const newFloat: Float = {
      id: `f-${Date.now()}`,
      name: `Float ${newFloatNumber}`,
      treeId: treeId,
    };
    setFloats(prev => [...prev, newFloat]);
    const tree = trees.find(t => t.id === treeId);
    logActivity(`Added Float ${newFloatNumber} to Tree #${tree?.number}.`, 'general');
  };

  const handleRemoveFloat = (floatId: string) => {
    const floatToRemove = floats.find(f => f.id === floatId);
    if (!floatToRemove) return;

    const floatsOnTree = floats.filter(f => f.treeId === floatToRemove.treeId);
    if (floatsOnTree.length <= 1) {
        alert("Cannot remove the last float from a tree.");
        return;
    }

    setFloats(prev => prev.filter(f => f.id !== floatId));
    const tree = trees.find(t => t.id === floatToRemove.treeId);
    logActivity(`Removed float "${floatToRemove.name}" from Tree #${tree?.number}.`, 'general');
    alert(`Float "${floatToRemove.name}" removed.`);
  };

  const handleAddSite = (name: string, photoUrl: string) => {
    const newSite: Site = {
      id: `s-${Date.now()}`,
      name,
      photoUrl,
      isArchived: false,
    };
    setSites(prev => [...prev, newSite]);
    logActivity(`Added new site: ${name}`, 'general');
  };

  const handleUpdateSite = (updatedSite: Site) => {
    setSites(prev => prev.map(site => site.id === updatedSite.id ? updatedSite : site));
    logActivity(`Updated site: ${updatedSite.name}`, 'general');
  };

  const handleAddAnchor = (name: string, siteId: string, latitude: number, longitude: number, isDeepwater: boolean, depth: number | undefined) => {
    const newAnchor: Anchor = {
      id: `a-${Date.now()}`,
      name,
      siteId,
      latitude,
      longitude,
      isDeepwater,
      depth: isDeepwater ? depth : undefined,
      isArchived: false,
    };
    setAnchors(prev => [...prev, newAnchor]);
    const site = sites.find(s => s.id === siteId);
    logActivity(`Added new anchor "${name}" to site ${site?.name}.`, 'general');
    alert(`Anchor "${name}" has been added.`);
  };

  const handleAddCollectionZone = (name: string, siteId: string, latitude: number, longitude: number) => {
    const newZone: CollectionZone = {
      id: `z-${Date.now()}`,
      name,
      siteId,
      latitude,
      longitude,
      isArchived: false,
    };
    setZones(prev => [...prev, newZone]);
    const site = sites.find(s => s.id === siteId);
    logActivity(`Added new collection zone "${name}" to site ${site?.name}.`, 'general');
    alert(`Collection Zone "${name}" has been added.`);
  };
  
  const handleAddBranch = (siteId: string, treeId: string, face: 1 | 2 | 3 | 4, position: number, isHeatTolerant: boolean, genus: string, species: string) => {
    const tree = trees.find(t => t.id === treeId);
    const site = sites.find(s => s.id === siteId);
    if (!tree || !site) {
        alert('Selected site or tree is invalid.');
        return;
    }
    
    const nextBranchNum = coralBranches.length + 1;
    const siteInitial = site.name.charAt(0).toUpperCase();
    const genusInitial = genus.charAt(0).toUpperCase();
    const speciesUpper = species.toUpperCase();
    const newFragmentId = `${siteInitial}${nextBranchNum}-${genusInitial}-${speciesUpper}`;

    const newBranch: CoralBranch = {
        id: `branch-${Date.now()}`,
        fragmentId: newFragmentId,
        genus,
        species,
        dateAdded: new Date().toISOString(),
        anchor: anchors.find(a => a.id === tree.anchorId)?.name || 'Unknown',
        tree: tree.number,
        face,
        position,
        collectionZone: zones.find(z => z.siteId === siteId)?.name || 'Unknown',
        site: site.name,
        photos: [],
        healthReports: [],
        growthReports: [],
        isHeatTolerant,
        isArchived: false,
    };

    setCoralBranches(prev => [...prev, newBranch]);
    logActivity(`Initial placement: Branch ${newFragmentId} [${newBranch.id}] was added to Tree #${tree.number}, Face ${face}, Position ${position}.`, 'movement');
    alert(`Branch ${newFragmentId} has been added.`);
  };

  const handleSelectBranch = (branchId: string) => {
    setActiveBranchId(branchId);
    handleNavigateToPage('details');
  };

  const handleArchiveItem = (itemType: ArchiveableItemType, itemId: string) => {
    let itemName = '';
    let isBranch = false;

    switch (itemType) {
        case 'Site':
            setSites(prev => prev.map(i => i.id === itemId ? { ...i, isArchived: true } : i));
            itemName = sites.find(i => i.id === itemId)?.name || itemId;
            break;
        case 'Collection Zone':
            setZones(prev => prev.map(i => i.id === itemId ? { ...i, isArchived: true } : i));
            itemName = zones.find(i => i.id === itemId)?.name || itemId;
            break;
        case 'Anchor':
            setAnchors(prev => prev.map(i => i.id === itemId ? { ...i, isArchived: true } : i));
            itemName = anchors.find(i => i.id === itemId)?.name || itemId;
            break;
        case 'Tree':
            setTrees(prev => prev.map(i => i.id === itemId ? { ...i, isArchived: true } : i));
            const treeNum = trees.find(i => i.id === itemId)?.number;
            itemName = treeNum ? `Tree #${treeNum}` : itemId;
            break;
        case 'Branch':
            const branchToArchive = coralBranches.find(b => b.id === itemId);
            if (!branchToArchive) return;

            setCoralBranches(prev => prev.map(b => b.id === itemId ? { ...b, isArchived: true } : b));
            const reminderText = `Collect replacement for ${branchToArchive.species} from ${branchToArchive.collectionZone}.`;
            const newTodo: ToDoItem = { id: `todo-replace-${Date.now()}`, text: reminderText };
            setToDoItems(prev => [newTodo, ...prev]);
            itemName = branchToArchive.fragmentId;
            isBranch = true;
            break;
    }

    logActivity(`Archived ${itemType}: ${itemName}.`, 'general');
    if (isBranch) {
        alert(`${itemType} ${itemName} has been archived. A replacement reminder has been added to your ToDo list.`);
    } else {
        alert(`${itemType} ${itemName} has been archived.`);
    }
  };


  const handleNavigateToPage = (page: Page, data?: any) => {
    setPageData(data || null);
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  
  const handleNavigateToAddEdit = (section: AddEditSection) => {
    setInitialSection(section);
    setCurrentPage('addEditItems');
    setIsMenuOpen(false);
  };
  
  const handleUpdateBranch = (updatedBranch: CoralBranch) => {
    updateBranchById(updatedBranch.id, () => updatedBranch);
    logActivity(`Updated details for branch ${updatedBranch.fragmentId}.`, 'general');
    alert('Branch details updated!');
    setEditingBranch(null);
  }

  const handleAddHealthReport = (branchId: string, newReportData: Omit<HealthReport, 'id'>, showAlert: boolean = true) => {
    const newReport: HealthReport = { ...newReportData, id: `h-${Date.now()}` };
    const branch = coralBranches.find(b => b.id === branchId);

    if (newReport.healthPercentage === 0) {
      // Defer archiving to the archive page
    }

    logActivity(`Added health report for branch ${branch?.fragmentId}.`, 'monitoring');
    if (showAlert) {
        alert(`Health report added for branch ${branch?.fragmentId}!`);
    }

    updateBranchById(branchId, branch => ({
        ...branch,
        healthReports: [newReport, ...branch.healthReports],
    }));
  };

  const handleAddRule = (newRule: Omit<Rule, 'id'>) => {
    const newRuleWithId = { ...newRule, id: `r-${Date.now()}` };
    setRules(prev => [...prev, newRuleWithId]);
    logActivity(`Added new rule: "${newRule.checkType}" for ${newRule.target} every ${newRule.intervalMonths} month(s).`, 'general');
    alert('New rule added!');
  };

  const handleWipeAllData = () => {
    // Confirmation handled by UI
    clearAllData();
    logActivity('All local tracking data has been wiped (Species/Rules preserved).', 'general');
  };
  
  const handleRestoreNurseryData = (backup: any) => {
    try {
        if (!backup.coralBranches || !backup.rules) throw new Error("Invalid nursery data backup file.");
        
        loadAllDataFromBackup(backup);
        setSyncStatus('saving'); // Trigger save
        
        logActivity('Nursery data restored from backup file.', 'general');
        alert('Nursery data restored successfully!');
    } catch(error) {
        alert(`Failed to restore nursery data: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const handleRestoreSpeciesIdData = (backup: any) => {
      try {
          if (!backup.speciesList) throw new Error("Invalid Species ID backup file.");
          
          setSpeciesList(backup.speciesList);
          setSyncStatus('saving'); // Trigger save
          
          logActivity('Species ID data restored from backup file.', 'general');
          alert('Species ID data restored successfully!');
      } catch(error) {
          alert(`Failed to restore Species ID data: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
  };

  const handleResetToSampleData = () => {
    loadSampleData();
  };
  
  const handleClearLog = () => {
      setActivityLog([]);
  };

  const handleAddToDo = (text: string) => {
    const newItem: ToDoItem = { id: `todo-${Date.now()}`, text };
    setToDoItems(prev => [newItem, ...prev]);
    logActivity(`Added ToDo: "${text}"`, 'general');
  };

  const handleDeleteToDo = (id: string) => {
    setToDoItems(prev => prev.filter(item => item.id !== id));
    logActivity(`Deleted ToDo item.`, 'general');
  };

  const handleAddVoiceNote = (audioUrl: string, duration: number) => {
    const newNote: VoiceNote = { id: `voice-${Date.now()}`, audioUrl, duration };
    setVoiceNotes(prev => [newNote, ...prev]);
    logActivity('Added a voice note.', 'general');
  };

  const handleDeleteVoiceNote = (id: string) => {
    setVoiceNotes(prev => {
        return prev.filter(item => item.id !== id);
    });
    logActivity('Deleted a voice note.', 'general');
  };
  
    const handleLogMaintenance = (logData: Omit<MaintenanceLog, 'id' | 'timestamp'>) => {
    const newLog: MaintenanceLog = {
      ...logData,
      id: `maint-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    setMaintenanceLogs(prev => [newLog, ...prev]);
    const tree = trees.find(t => t.id === logData.treeId);
    if (logData.target === 'Tree') {
      logActivity(`Logged maintenance for Tree #${tree?.number}: ${logData.tasks.join(', ')}`, 'maintenance');
    } else {
      const branch = coralBranches.find(b => b.id === logData.branchId);
      logActivity(`Logged maintenance for Branch ${branch?.fragmentId}: ${logData.tasks.join(', ')}`, 'maintenance');
    }
    alert('Maintenance logged successfully.');
  };

  const handleMoveTreeUp = (treeId: string) => {
    setTrees(prev => prev.map(t => {
      if (t.id === treeId) {
        const newDepth = t.currentDepth - 2;
        logActivity(`Moved Tree #${t.number} up from ${t.currentDepth}m to ${newDepth}m.`, 'movement');
        return { ...t, currentDepth: newDepth, lastMovedDate: new Date().toISOString() };
      }
      return t;
    }));
  };

  const handleMoveTreeDown = (treeId: string, targetDepth: number) => {
    setTrees(prev => prev.map(t => {
      if (t.id === treeId) {
        logActivity(`Moved Tree #${t.number} down from ${t.currentDepth}m to ${targetDepth}m.`, 'movement');
        return { ...t, currentDepth: targetDepth, lastMovedDate: new Date().toISOString() };
      }
      return t;
    }));
  };

  const handleMoveTree = (treeId: string, newAnchorId: string, reason?: string) => {
    setTrees(prev => prev.map(t => {
      if (t.id === treeId) {
        const oldAnchor = anchors.find(a => a.id === t.anchorId);
        const newAnchor = anchors.find(a => a.id === newAnchorId);
        logActivity(`Moved Tree #${t.number} from Anchor "${oldAnchor?.name}" to "${newAnchor?.name}". Reason: ${reason || 'Not specified'}.`, 'movement');
        return { ...t, anchorId: newAnchorId };
      }
      return t;
    }));
  };

  const handleUpdateTreeNormalDepth = (treeId: string, newNormalDepth: number) => {
    setTrees(prev => prev.map(t => {
      if (t.id === treeId) {
        logActivity(`Updated target depth for Tree #${t.number} to ${newNormalDepth}m.`, 'general');
        return { ...t, normalDepth: newNormalDepth };
      }
      return t;
    }));
  };

  const handleGenerateSchedule = (targetDate: string) => {
    const newSchedule = new Map<string, ScheduleItem[]>();
    const deepTrees = trees.filter(t => t.currentDepth > t.normalDepth);

    deepTrees.forEach(tree => {
      let currentTree = { ...tree };
      let movesNeeded = (currentTree.currentDepth - currentTree.normalDepth) / 2;

      for (let i = 0; i < movesNeeded; i++) {
        const moveDate = new Date(targetDate);
        moveDate.setDate(moveDate.getDate() - (i + 1) * 14); // Move up every 14 days before target
        
        const dateString = moveDate.toISOString().split('T')[0];

        if (!newSchedule.has(dateString)) {
          newSchedule.set(dateString, []);
        }

        const fromDepth = currentTree.currentDepth;
        const toDepth = fromDepth - 2;
        
        newSchedule.get(dateString)!.push({ tree: currentTree, fromDepth, toDepth });
        
        currentTree = { ...currentTree, currentDepth: toDepth };
      }
    });
    setSchedule(newSchedule);
    logActivity(`Generated restoration schedule for target date ${targetDate}.`, 'general');
  };

  const handleMoveBranch = (branchId: string, newTreeId: string, newFace: 1 | 2 | 3 | 4, newPosition: number, reason?: string) => {
    const newTree = trees.find(t => t.id === newTreeId);
    if (!newTree) return;
    const newAnchor = anchors.find(a => a.id === newTree.anchorId);
    if (!newAnchor) return;
    const newSite = sites.find(s => s.id === newAnchor.siteId);
    if (!newSite) return;

    setCoralBranches(prev => prev.map(b => {
      if (b.id === branchId) {
        logActivity(`Moved Branch ${b.fragmentId} from Tree #${b.tree} to Tree #${newTree.number}, Face ${newFace}, Position ${newPosition}. Reason: ${reason || 'Not specified'}.`, 'movement');
        return { ...b, tree: newTree.number, anchor: newAnchor.name, site: newSite.name, face: newFace, position: newPosition };
      }
      return b;
    }));
    alert('Branch moved successfully!');
  };

  const handleAddTempLogger = (siteId: string, anchorId: string, depth: number) => {
    const newLogger: TemperatureLogger = { id: `temp-${Date.now()}`, siteId, anchorId, depth };
    setTempLoggers(prev => [...prev, newLogger]);
    logActivity(`Registered new temperature logger at ${depth}m.`, 'general');
    alert('Temperature logger registered.');
  };

  const handleRemoveTempLogger = (loggerId: string) => {
    setTempLoggers(prev => prev.filter(l => l.id !== loggerId));
    logActivity(`Removed temperature logger.`, 'general');
    alert('Temperature logger removed.');
  };
  
    const handleStartTreeShadeExperiment = (controlTreeId: string, shadedTreeId: string, shadeLevel: 30 | 50) => {
        setTreeShadeExperiment({
            isActive: true,
            controlTreeId,
            shadedTreeId,
            shadeLevel,
            startDate: new Date().toISOString(),
            reports: [],
        });
        logActivity('Started Tree Shade experiment.', 'general');
    };

    const handleAddTreeShadeReport = (notes: string) => {
        if (!treeShadeExperiment) return;

        const controlTree = trees.find(t => t.id === treeShadeExperiment.controlTreeId);
        const shadedTree = trees.find(t => t.id === treeShadeExperiment.shadedTreeId);
        if (!controlTree || !shadedTree) return;

        const getTreeStats = (treeNumber: number) => {
            const treeBranches = activeBranches.filter(b => b.tree === treeNumber);
            if (treeBranches.length === 0) return { health: 0, bleaching: 0 };
            
            let totalHealth = 0;
            let bleachingCount = 0;

            treeBranches.forEach(b => {
                const latestReport = b.healthReports.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
                if (latestReport) {
                    totalHealth += latestReport.healthPercentage;
                    if (latestReport.bleaching !== 'None') {
                        bleachingCount++;
                    }
                }
            });
            return { health: totalHealth / treeBranches.length, bleaching: bleachingCount };
        };

        const controlStats = getTreeStats(controlTree.number);
        const shadedStats = getTreeStats(shadedTree.number);
        
        const newReport: ExperimentReport = {
            id: `exp-report-${Date.now()}`,
            date: new Date().toISOString(),
            notes,
            controlTreeHealth: controlStats.health,
            shadedTreeHealth: shadedStats.health,
            controlTreeBleachingCount: controlStats.bleaching,
            shadedTreeBleachingCount: shadedStats.bleaching,
        };
        
        setTreeShadeExperiment(prev => prev ? { ...prev, reports: [newReport, ...prev.reports] } : null);
        logActivity('Logged a report for Tree Shade experiment.', 'monitoring');
    };

    const handleEndTreeShadeExperiment = () => {
        if (treeShadeExperiment) {
            setTreeShadeExperiment({ ...treeShadeExperiment, isActive: false });
            logActivity('Ended Tree Shade experiment.', 'general');
        }
    };
    
    const createStudyHandlers = (
        study: LongTermStudy | null, 
        setStudy: React.Dispatch<React.SetStateAction<LongTermStudy | null>>, 
        title: string
    ) => ({
        handleStart: () => {
            if (setStudy) setStudy({ isActive: true, startDate: new Date().toISOString(), reports: [] });
            logActivity(`Started ${title} study.`, 'general');
        },
        handleAddReport: (notes: string) => {
            if (study && setStudy) {
                const newReport: ObservationReport = { id: `obs-${Date.now()}`, date: new Date().toISOString(), notes };
                setStudy({ ...study, reports: [newReport, ...study.reports] });
                logActivity(`Logged observation for ${title} study.`, 'monitoring');
            }
        },
        handleEnd: () => {
            if (study && setStudy) {
                setStudy({ ...study, isActive: false });
                logActivity(`Ended ${title} study.`, 'general');
            }
        }
    });

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage reminders={reminders} branches={activeBranches} sites={activeSites} trees={activeTrees} zones={zones} onSelectBranch={handleSelectBranch} />;
      case 'details':
        return activeBranch ? (
          <CoralBranchDisplay
            branch={activeBranch}
            activityLog={activityLog}
            onOpenPhotoManager={() => setIsBranchModalOpen(true)}
            onNavigateToHealthReports={() => handleNavigateToPage('healthReports', { branch: activeBranch })}
            onNavigateToGrowthReports={() => handleNavigateToPage('growthReports', { branch: activeBranch })}
            onEdit={branch => setEditingBranch(branch)}
            onMove={branch => handleNavigateToPage('branches', { branchToMove: branch })}
          />
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold text-deep-sea">No branch selected.</h2>
            <p className="text-gray-600 mt-2">Please select a branch to view its details.</p>
          </div>
        );
      case 'addEditItems':
        return <AddEditItemsPage initialSection={initialSection} activeBranches={activeBranches} onSelectBranch={handleSelectBranch} onNavigateBack={() => setCurrentPage('details')} onNavigateToPage={handleNavigateToPage}/>;
      case 'rules':
        return <RulesPage rules={rules} onAddRule={handleAddRule} onNavigateBack={() => setCurrentPage('dashboard')} />;
      case 'healthReports':
        return pageData?.branch ? <HealthReportsPage reports={pageData.branch.healthReports} onNavigateBack={() => setCurrentPage('details')} /> : <div>Branch data missing.</div>;
      case 'growthReports':
        return pageData?.branch ? <GrowthReportsPage reports={pageData.branch.growthReports} onNavigateBack={() => setCurrentPage('details')} /> : <div>Branch data missing.</div>;
      case 'backupRestore': {
        const nurseryBackupData = { coralBranches, rules, sites, zones, anchors, trees, floats, activityLog, maintenanceLogs, tempLoggers, toDoItems };
        const speciesIdBackupData = { speciesList };
        return <BackupRestorePage 
                  onNavigateBack={() => setCurrentPage('dashboard')}
                  nurseryBackupData={nurseryBackupData}
                  speciesIdBackupData={speciesIdBackupData}
                  onWipeAllData={handleWipeAllData}
                  onRestoreNurseryData={handleRestoreNurseryData}
                  onRestoreSpeciesIdData={handleRestoreSpeciesIdData}
                  onResetToSampleData={handleResetToSampleData}
                  hasExistingData={coralBranches.length > 0}
               />;
      }
      case 'reports':
        return <ReportsPage onNavigateBack={() => setCurrentPage('dashboard')} coralBranches={coralBranches} />;
      case 'speciesId': {
        const selectedSpeciesId = pageData?.speciesId;
        return <SpeciesIdPage 
                speciesList={speciesList} 
                selectedSpeciesId={selectedSpeciesId || null}
                onOpenPhotoManager={(speciesId) => { setEditingSpeciesId(speciesId); setIsSpeciesModalOpen(true); }}
                onUpdateSpecies={handleUpdateSpecies}
                onAddSpecies={handleAddSpecies}
                onNavigateToSpeciesDetail={(speciesId) => handleNavigateToPage('speciesId', { speciesId })}
                onNavigateBack={() => handleNavigateToPage('speciesId')}
                onNavigateBackToMenu={() => setCurrentPage('dashboard')}
               />;
      }
      case 'archive':
        return <ArchivePage 
                activityLog={activityLog}
                activeSites={activeSites}
                archivedSites={archivedSites}
                activeZones={activeZones}
                archivedZones={archivedZones}
                activeAnchors={activeAnchors}
                archivedAnchors={archivedAnchors}
                activeTrees={activeTrees}
                archivedTrees={archivedTrees}
                activeBranches={activeBranches}
                archivedBranches={archivedBranches}
                onArchiveItem={handleArchiveItem}
                onClearLog={handleClearLog}
                onNavigateBack={() => setCurrentPage('dashboard')}
               />;
      case 'notesToDo':
        return <NotesToDoPage 
                toDoItems={toDoItems} 
                voiceNotes={voiceNotes} 
                onAddToDo={handleAddToDo} 
                onDeleteToDo={handleDeleteToDo} 
                onAddVoiceNote={handleAddVoiceNote} 
                onDeleteVoiceNote={handleDeleteVoiceNote} 
                onNavigateBack={() => setCurrentPage('dashboard')} 
               />;
      case 'monitoring':
        return <MonitoringPage 
                branches={activeBranches}
                sites={activeSites}
                trees={activeTrees}
                anchors={activeAnchors}
                onAddHealthReport={handleAddHealthReport}
                onNavigateBack={() => setCurrentPage('dashboard')}
                onSelectBranch={handleSelectBranch}
                onLogMaintenance={handleLogMaintenance}
               />;
      case 'trees':
        return <TreesPage
                sites={activeSites}
                anchors={activeAnchors}
                trees={activeTrees}
                floats={floats}
                branches={activeBranches}
                activityLog={activityLog}
                onAddTree={handleAddTree}
                onAddFloat={handleAddFloat}
                onMoveTreeUp={handleMoveTreeUp}
                onMoveTreeDown={handleMoveTreeDown}
                onMoveTree={handleMoveTree}
                onUpdateTreeNormalDepth={handleUpdateTreeNormalDepth}
                schedule={schedule}
                onGenerateSchedule={handleGenerateSchedule}
                onNavigateBack={() => handleNavigateToAddEdit('Trees')}
               />;
      case 'modelComparison':
        return <ModelComparisonPage onNavigateBack={() => setCurrentPage('dashboard')} />;
      case 'sites':
        return <SitesPage sites={activeSites} onAddSite={handleAddSite} onUpdateSite={handleUpdateSite} onNavigateBack={() => handleNavigateToAddEdit('Sites')} />;
      case 'anchors':
        return <AnchorsPage sites={activeSites} anchors={activeAnchors} onAddAnchor={handleAddAnchor} onNavigateBack={() => handleNavigateToAddEdit('Anchors')} />;
      case 'collectionZones':
        return <CollectionZonesPage sites={activeSites} zones={activeZones} onAddZone={handleAddCollectionZone} onNavigateBack={() => handleNavigateToAddEdit('Collection Zones')} />;
      case 'branches':
        return <BranchesPage
                sites={activeSites}
                anchors={activeAnchors}
                trees={activeTrees}
                branches={activeBranches}
                onAddBranch={handleAddBranch}
                onMoveBranch={handleMoveBranch}
                onSelectBranch={handleSelectBranch}
                onNavigateBack={() => handleNavigateToAddEdit('Branches')}
                initialBranchToMove={pageData?.branchToMove}
               />;
      case 'environmental':
        return <EnvironmentalPage 
                onNavigateBack={() => setCurrentPage('dashboard')}
                tempLoggers={tempLoggers}
                sites={activeSites}
                anchors={activeAnchors}
                onAddTempLogger={handleAddTempLogger}
                onRemoveTempLogger={handleRemoveTempLogger}
               />;
      case 'experiments':
        return <ExperimentsPage onNavigateToPage={handleNavigateToPage} />;
      case 'treeShadeExperiment':
        return <TreeShadeExperimentPage
                experiment={treeShadeExperiment}
                trees={activeTrees}
                branches={activeBranches}
                onStart={handleStartTreeShadeExperiment}
                onAddReport={handleAddTreeShadeReport}
                onEnd={handleEndTreeShadeExperiment}
                onNavigateBack={() => handleNavigateToPage('experiments')}
               />;
      case 'ropeOnRubbleExperiment':
      case 'squareRopeFrameExperiment':
      case 'cubeRopeFrameExperiment': {
        const studyMap = {
            'ropeOnRubbleExperiment': { study: ropeOnRubbleExperiment, setStudy: setRopeOnRubbleExperiment, title: "Rope on Rubble" },
            'squareRopeFrameExperiment': { study: squareRopeFrameExperiment, setStudy: setSquareRopeFrameExperiment, title: "Square Rope Frame" },
            'cubeRopeFrameExperiment': { study: cubeRopeFrameExperiment, setStudy: setCubeRopeFrameExperiment, title: "Cube Rope Frame" },
        };
        const { study, setStudy, title } = studyMap[currentPage];
        const { handleStart, handleAddReport, handleEnd } = createStudyHandlers(study, setStudy, title);
        return <LongTermStudyPage
                title={title}
                experiment={study}
                onStart={handleStart}
                onAddReport={handleAddReport}
                onEnd={handleEnd}
                onNavigateBack={() => handleNavigateToPage('experiments')}
               />;
      }
      case 'trends':
        return <TrendsPage
                coralBranches={coralBranches}
                maintenanceLogs={maintenanceLogs}
                sites={activeSites}
                trees={activeTrees}
                anchors={activeAnchors}
                onNavigateBack={() => setCurrentPage('dashboard')}
               />;
      case 'floatManagement':
        return <FloatManagementPage
                sites={activeSites}
                trees={activeTrees}
                floats={floats}
                branches={activeBranches}
                onAddFloat={handleAddFloat}
                onRemoveFloat={handleRemoveFloat}
                onNavigateBack={() => handleNavigateToAddEdit('Floats')}
               />;
      default:
        return <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-md">The content for page '{currentPage}' could not be rendered because the page logic is missing.</div>;
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-transparent">
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigateToAddEdit={handleNavigateToAddEdit}
        onNavigateToPage={handleNavigateToPage}
      />
      <div className="flex-1 flex flex-col bg-transparent">
        <header className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-md shadow-md z-10 sticky top-0">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100">
            <HamburgerIcon className="w-6 h-6 text-gray-600"/>
          </button>
          <h1 className="text-xl font-bold text-deep-sea">Coral Nursery Monitor</h1>
          <SyncStatusIndicator status={syncStatus} />
        </header>

        <main className="flex-1 p-4 sm:p-6 bg-transparent">
          {isInitialLoading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading data...</p>
            </div>
          ) : (
            renderPage()
          )}
        </main>
      </div>

      {editingBranch && (
        <EditBranchModal 
          branch={editingBranch}
          onUpdate={handleUpdateBranch}
          onClose={() => setEditingBranch(null)}
        />
      )}
      
      {(isBranchModalOpen || isSpeciesModalOpen) && (
        <PhotoManagerModal
            isOpen={isBranchModalOpen || isSpeciesModalOpen}
            onClose={() => { setIsBranchModalOpen(false); setIsSpeciesModalOpen(false); }}
            photos={(isBranchModalOpen ? activeBranch?.photos : speciesList.find(s=>s.id === editingSpeciesId)?.photos) || []}
            onAddPhotos={isBranchModalOpen ? handleBranchAddPhotos : handleSpeciesAddPhotos}
            onDeletePhotos={isBranchModalOpen ? handleBranchDeletePhotos : handleSpeciesDeletePhotos}
            onSetMainPhoto={isBranchModalOpen ? handleBranchSetMainPhoto : handleSpeciesSetMainPhoto}
        />
      )}

    </div>
  );
};

export default App;
